import { Client } from 'basic-ftp';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import cliProgress from 'cli-progress';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load FTP configuration
let config;
try {
  const configPath = path.join(__dirname, 'ftp-config.json');
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
  console.error('Error: ftp-config.json not found!');
  console.log('\nPlease create scripts/ftp-config.json with your FTP credentials');
  process.exit(1);
}

// Configuration
const MAX_RETRIES = 3;
const TIMEOUT = 120000; // 2 minutes timeout

let client = new Client();

function configureClient() {
  client.ftp.verbose = false;
  client.ftp.timeout = TIMEOUT;
  // Enable socket keepAlive to prevent connection drops
  client.ftp.socket?.setKeepAlive?.(true, 10000);
}

// Connect to FTP server
async function connect() {
  configureClient();
  await client.access({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port || 21,
    secure: config.secure || false,
  });
  // Re-enable keepAlive after connection
  if (client.ftp.socket) {
    client.ftp.socket.setKeepAlive(true, 10000);
  }
}

// Reconnect function for recovery
async function reconnect() {
  console.log('\n[!] Connection lost, attempting to reconnect...');
  try {
    client.close();
  } catch (e) {
    // Ignore close errors
  }
  client = new Client();
  await connect();
  await client.cd(config.remoteRoot);
  console.log('[+] Reconnected successfully!\n');
}

// Get all files in directory recursively
function getAllFiles(dir, baseDir = dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push({
        localPath: fullPath,
        remotePath: relativePath.replace(/\\/g, '/'),
        size: stat.size
      });
    }
  }
  return files;
}

// Clean up Hostinger's temp files (leftover from failed uploads)
async function cleanupTempFiles() {
  console.log('[*] Checking for leftover temp files...');
  try {
    const list = await client.list();
    const tempFiles = list.filter(f => f.name.startsWith('.in.') && f.name.endsWith('.'));

    if (tempFiles.length > 0) {
      console.log(`[*] Found ${tempFiles.length} temp files, cleaning up...`);
      for (const file of tempFiles) {
        try {
          await client.remove(file.name);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      console.log('[+] Temp files cleaned up!');
    }
  } catch (error) {
    // Ignore errors during cleanup
  }
}

// Upload a single file with retry logic
async function uploadFileWithRetry(localPath, remotePath, retries = MAX_RETRIES) {
  const remoteDir = path.dirname(remotePath);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Ensure remote directory exists
      if (remoteDir && remoteDir !== '.') {
        await client.ensureDir(remoteDir);
        await client.cd(config.remoteRoot); // Go back to root
      }

      // Upload the file
      await client.uploadFrom(localPath, remotePath);
      return true;
    } catch (error) {
      const isLastAttempt = attempt === retries;

      if (isLastAttempt) {
        console.log(`\n[X] Failed to upload ${path.basename(remotePath)} after ${retries} attempts: ${error.message}`);
        throw error;
      }

      console.log(`\n[!] Attempt ${attempt}/${retries} failed for ${path.basename(remotePath)}: ${error.message}`);

      // Try to reconnect before next attempt
      try {
        await reconnect();
        await cleanupTempFiles();
      } catch (reconnectError) {
        console.log(`[!] Reconnect failed: ${reconnectError.message}`);
        // Wait a bit before trying again
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
  return false;
}

async function deploy() {
  const progressBar = new cliProgress.SingleBar({
    format: 'Uploading |{bar}| {percentage}% | {value}/{total} files | {filename}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  try {
    console.log('Starting FTP deployment...\n');

    // Connect to FTP server
    console.log('[*] Connecting to FTP server...');
    await connect();
    console.log('[+] Connected!\n');

    // Ensure remote directory exists and change to it
    try {
      await client.cd(config.remoteRoot);
      console.log(`[*] Remote directory: ${config.remoteRoot}\n`);
    } catch (error) {
      console.log(`[*] Creating remote directory: ${config.remoteRoot}...`);
      await client.ensureDir(config.remoteRoot);
      await client.cd(config.remoteRoot);
      console.log(`[+] Directory created and ready!\n`);
    }

    // Clean up any leftover temp files from previous failed uploads
    await cleanupTempFiles();

    // Delete the old assets folder to clear cache
    console.log('[*] Clearing old assets folder...');
    try {
      await client.removeDir('assets');
      console.log('[+] Old assets cleared!');
    } catch (error) {
      console.log('[!] No existing assets folder');
    }

    // Get all files to upload
    const localDistPath = path.join(__dirname, '..', 'dist');
    const files = getAllFiles(localDistPath);
    const totalFiles = files.length;

    // Sort files by size (smallest first) for better reliability
    files.sort((a, b) => a.size - b.size);

    console.log(`\n[*] Total files to upload: ${totalFiles}`);
    console.log(`[*] Using ${MAX_RETRIES} retry attempts per file`);
    console.log(`[*] Timeout: ${TIMEOUT / 1000} seconds\n`);

    // Start progress bar
    progressBar.start(totalFiles, 0, { filename: 'Starting...' });

    let uploadedFiles = 0;
    let failedFiles = [];

    // Upload files one at a time
    for (const file of files) {
      const filename = path.basename(file.remotePath);
      progressBar.update(uploadedFiles, { filename: filename.substring(0, 30) });

      try {
        await uploadFileWithRetry(file.localPath, file.remotePath);
        uploadedFiles++;
        progressBar.update(uploadedFiles, { filename: filename.substring(0, 30) });
      } catch (error) {
        failedFiles.push(file.remotePath);
        // Continue with other files even if one fails
      }
    }

    // Stop progress bar
    progressBar.stop();

    // Report results
    if (failedFiles.length > 0) {
      console.log(`\n[!] Deployment completed with ${failedFiles.length} failed files:`);
      failedFiles.forEach(f => console.log(`    - ${f}`));
      console.log('\n[*] You may need to upload these files manually.');
      process.exit(1);
    } else {
      console.log('\n[+] All files uploaded successfully!');
      console.log('[+] Deployment complete!\n');
    }

  } catch (error) {
    progressBar.stop();
    console.error('\n[X] Deployment failed:', error.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Run deployment
deploy();

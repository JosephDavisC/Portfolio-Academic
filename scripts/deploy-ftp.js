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
  console.error('❌ Error: ftp-config.json not found!');
  console.log('\n📝 Please create scripts/ftp-config.json with your FTP credentials');
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = false; // Disable verbose logs for cleaner output

// Count total files in directory
function countFiles(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      count += countFiles(filePath);
    } else {
      count++;
    }
  }
  return count;
}

async function deploy() {
  const progressBar = new cliProgress.SingleBar({
    format: '📤 Uploading |{bar}| {percentage}% | {value}/{total} files | {filename}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  });

  try {
    console.log('🚀 Starting FTP deployment...\n');

    // Connect to FTP server
    console.log('📡 Connecting to FTP server...');
    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port || 21,
      secure: config.secure || false,
    });
    console.log('✅ Connected!\n');

    // Ensure remote directory exists and change to it
    try {
      await client.cd(config.remoteRoot);
      console.log(`📂 Remote directory: ${config.remoteRoot}\n`);
    } catch (error) {
      console.log(`📁 Creating remote directory: ${config.remoteRoot}...`);
      await client.ensureDir(config.remoteRoot);
      await client.cd(config.remoteRoot);
      console.log(`✅ Directory created and ready!\n`);
    }

    // Delete the old assets folder to clear cache
    console.log('🗑️  Clearing old assets folder...');
    try {
      await client.removeDir('assets');
      console.log('✅ Old assets cleared!\n');
    } catch (error) {
      console.log('⚠️  No existing assets folder\n');
    }

    // Count total files
    const localDistPath = path.join(__dirname, '..', 'dist');
    const totalFiles = countFiles(localDistPath);

    console.log(`📊 Total files to upload: ${totalFiles}\n`);

    // Start progress bar
    let uploadedFiles = 0;
    progressBar.start(totalFiles, 0, { filename: 'Starting...' });

    // Track uploads
    client.trackProgress(info => {
      if (info.type === 'upload') {
        uploadedFiles++;
        const filename = path.basename(info.name);
        progressBar.update(uploadedFiles, { filename: filename.substring(0, 30) });
      }
    });

    // Upload everything from dist folder
    await client.uploadFromDir(localDistPath);

    // Stop progress bar
    progressBar.stop();

    console.log('\n✅ All files uploaded successfully!');
    console.log('🎉 Deployment complete!\n');

  } catch (error) {
    progressBar.stop();
    console.error('\n❌ Deployment failed:', error.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Run deployment
deploy();

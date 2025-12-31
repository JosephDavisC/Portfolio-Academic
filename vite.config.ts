import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - ~140KB
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation & UI - ~100KB
          'vendor-ui': ['framer-motion', '@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-tabs', '@radix-ui/react-accordion'],
          // Utilities - ~50KB
          'vendor-utils': ['date-fns', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          // Charts & Data - ~150KB
          'vendor-charts': ['recharts', '@tanstack/react-query'],
          // Icons - ~50KB
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
}));

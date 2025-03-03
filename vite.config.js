import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // This enables jsx in .js files
    include: "**/*.{jsx,js,tsx,ts}",
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
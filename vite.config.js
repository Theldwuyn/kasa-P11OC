import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['verbose'],
    watch: false,
    coverage: {
      include: ['src/__test__/*'],
    },
  },
});

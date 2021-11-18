import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.text',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Instablam',
        short_name: 'Instablam',
        description:
          'App to take photos and look at previouse pictures in the gallery.',
        theme_color: '#eee',
      },
    }),
  ],
});

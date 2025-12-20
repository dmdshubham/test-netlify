import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'

import path, { resolve } from 'path'
// import {resolve} from 'path';

const root = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias:
    {
      "@components": resolve(root, 'components'),
      "@images": resolve(root, 'assets/images')
    },

  },
})

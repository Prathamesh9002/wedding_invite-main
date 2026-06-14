import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/wedding_invite-main/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

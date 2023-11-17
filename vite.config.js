import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactSWC from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSWC()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: 'import React from "react"',
  },
  base: '/3d_portfolio/',
});
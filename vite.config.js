import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import fs from 'fs'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  /* eslint-disable no-undef */
  const env = loadEnv(mode, process.cwd())
  return {
    css: {
      preprocessorOptions: {
        //Silencing Deprecations Warnings for both scss and sass files
        scss: {
          // api: 'modern-compiler' // or "modern"
          silenceDeprecations: ['legacy-js-api']
        },
        sass: {
          silenceDeprecations: ['legacy-js-api']
        }
      }
    },
    plugins: [
      vue(),
      eslintPlugin(),
      vuetify(),
      VueI18nPlugin({
        // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
        compositionOnly: false,
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
        strictMessage: false,
        escapeHtml: true
        // runtimeOnly: false,
        // silentFallbackWarn: true,
        // warnHtmlInMessage: false,
        // warnHtmlMessage: false
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      https: {
        key: fs.readFileSync('../certs/persotool.key'),
        cert: fs.readFileSync('../certs/persotool.crt')
      },
      host: env.VITE_SERVER_HOST,
      port: env.VITE_SERVER_PORT
    },
    preview: {
      port: 4001 // Set the port for `vite preview`
    }
    /* build: {
    outDir: '../dist',
    target: 'esnext',
  } */
  }
})

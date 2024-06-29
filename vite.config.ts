import vue from '@vitejs/plugin-vue'
import { type Plugin, defineConfig } from 'vite'
import { resolve } from 'path'

const transformHtmlPlugin = (data: Record<string, string>): Plugin => ({
    name: 'transform-html',
    transformIndexHtml: {
        order: 'pre',
        handler(html: string) {
            return html.replace(/<%=\s*(\w+)\s*%>/gi, (_match, p1) => data[p1] || '')
        }
    }
})

export default defineConfig({
    plugins: [
        vue(),
        transformHtmlPlugin({
            title: 'Vue 3, Pinia, TypeScript, Vite, Vitest',
            description: 'A single page application created using Vue.js 3'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, '/src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/scss/variables";`
            }
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        reporters: ['default'],
        coverage: {
            reporter: ['text', 'json'],
            exclude: ['*.cjs', 'src/main.ts', 'src/router/index.ts', 'src/App.vue']
        },
        server: {
            deps: {
                inline: ['@pequity/squirrel']
            }
        }
    }
})

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ['element-plus/lib/locale/lang/zh-cn']
    },
    build: {
        base: "./"
    },
    server: {
        proxy: {
            // '/api': 'http://localhost:8082/api',
            // with options
            '/api': {
                target: 'http://localhost:8182/api',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        },
        // hmr: {
        //     overlay: true
        // }
    },
})


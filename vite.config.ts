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

})

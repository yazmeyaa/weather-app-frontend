import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }) => {
    return defineConfig({
        plugins: [
            react(),
            envCompatible({ prefix: 'REACT_APP_' }),
            svgrPlugin(),
            viteTsconfigPaths(),
        ],
        define: {
            'process.env.NODE_ENV': `"${mode}"`,
        },
    })
}

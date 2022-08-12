import { defineConfig } from 'vite';
import { resolve, basename } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    server: {
        port: 9090
    },
    root: 'views',
    build: {
        outDir: '../dist'
    },
    plugins: [handlebars({
        context: {
            title: 'Alan',
            assets: resolve(__dirname, 'public')
        },
        partialDirectory: resolve(__dirname, 'views/components'),
        helpers: {
            capitalize: ()=> {
                console.log()
            }
        }
    })],
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' }
    }
})
 
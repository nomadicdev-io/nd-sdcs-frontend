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
    publicDir: 'assets',  
    plugins: [handlebars({
        context: {
            title: 'Alan',
            assets: resolve(__dirname, 'assets'),
            boydClass: 'page_body'
        },
        partialDirectory: [resolve(__dirname, 'views/layout'), resolve(__dirname, 'views/components'), resolve(__dirname, 'views/sections')],
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
 
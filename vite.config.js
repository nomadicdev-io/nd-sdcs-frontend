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
            boydClass: 'page_body',
            whatsapp: "https://wa.me/+971565704704?text=Hi,%20Sanabel%20Documents%20Clearing%20Services",
            map: "hhttps://www.google.com/maps?q=25.279754638671875,55.34518051147461&z=17&hl=en"
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
 
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: false,
        port: 8080,
        https: false,
        host: 'localhost',
        proxy: {
            '/dev-api': {
                target: 'https://www.markerhub.com/vueadmin-java',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + '/dev-api']: ''
                }
            }
        }
    },
    lintOnSave: false
})
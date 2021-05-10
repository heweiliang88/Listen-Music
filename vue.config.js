/*
 * @Descripttion : 
 * @version      : 
 * @Author       : heweiliang
 * @Date         : 2021-04-20 15:31:13
 * @LastEditors  : heweiliang
 * @LastEditTime : 2021-04-27 10:29:00
 * @FilePath     : \vue.config.js
 */
const path = require('path')
const IS_PRO = ['production', 'test'].includes(process.env.NODE_ENV);

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 把开发服务器架设在根路径
    publicPath: process.env.NODE_ENV === 'production' ? './'
        : './',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    // lintOnSave: process.env.NODE_ENV !== 'production',
    lintOnSave: false,

    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('api', resolve('src/api'))
            .set('utils', resolve('src/utils'))
            .set('store', resolve('src/store'))
            .set('router', resolve('src/router'))

        config.resolve.extensions
            .add('.js')
            .add('.vue')
            .add('.stylus')
    },

    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: IS_PRO,
        // 开启 CSS source maps  打包时不生成.map文件?
        sourceMap: false,
        // css预设器配置项
        // loaderOptions: {
        // },
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        requireModuleExtension: true,
        loaderOptions: {
            stylus: {
                import: '~@/assets/styles/variable.styl'
            }
        }
    },

    devServer: {
        port: 8088,
        open: true,
        hotOnly: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }

}

const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}
// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    baseUrl: BASE_URL,
    outputDir: 'dist', // 打包生成的生产环境构建文件的目录
    assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启 生产环境的 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
    },
    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {} // css预设器配置项
    },
    devServer: {
        port: 8000, // 端口
        proxy: 'http://127.0.0.1:3000' // 设置代理
    },
    // configureWebpack: config => {
    //     // if (process.env.NODE_ENV !== 'production') return;
    //     return {
    //         plugins: [
    //             new PrerenderSPAPlugin({
    //                 // 生成文件的路径，也可以与webpakc打包的一致。
    //                 // 下面这句话非常重要！！！
    //                 // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //                 staticDir: path.join(__dirname,'dist'),
    //                 // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //                 routes: ['/', '/goods/goodsList', '/home'],
    //                 // 这个很重要，如果没有配置这段，也不会进行预编译
    //                 renderer: new Renderer({
    //                     inject: {
    //                         foo: 'bar'
    //                     },
    //                     headless: false,
    //                     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //                     renderAfterDocumentEvent: 'render-event'
    //                 })
    //             }),
    //         ],
    //     };
    // }
}
/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require('compression-webpack-plugin')
const proxy = require('./src/proxy')

const NODE_ENV = process.env.VUE_APP_NODE_ENV
const IS_BUILD = NODE_ENV === 'production' || NODE_ENV === 'sit'

module.exports = {
  publicPath: IS_BUILD ? `/${process.env.VUE_APP_PROJECT_NAME}/` : '/', // 基本路径 如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  outputDir: 'dist', // 输出文件目录
  // filename: 'vritual-scroll.js', // 打包之后的名称
  // library: 'vritual-scroll', // 指定的就是你使用require时的模块名
  // libraryTarget: 'umd', // 指定输出格式
  // umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  configureWebpack: config => {
    // 生产包gzip 压缩
    if (IS_BUILD) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      )
    }
    if (NODE_ENV !== 'production') {
      config.devtool = '#cheap-module-source-map'
    }
    if (NODE_ENV === 'production') { // 生产环境去掉console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  // 第三方插件配置
  pluginOptions: {
  },
  ...proxy
}

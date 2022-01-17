/* eslint-disable @typescript-eslint/no-var-requires */
const proxy = require('./src/proxy')

const NODE_ENV = process.env.VUE_APP_NODE_ENV
const IS_BUILD = NODE_ENV === 'production' || NODE_ENV === 'sit'

module.exports = {
  publicPath: IS_BUILD ? `/${process.env.VUE_APP_PROJECT_NAME}/` : '/', // 基本路径 如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
  outputDir: 'dist', // 输出文件目录
  configureWebpack: config => {
    if (NODE_ENV === 'production') { // 生产环境去掉console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  // 第三方插件配置
  pluginOptions: {
  },
  ...proxy
}

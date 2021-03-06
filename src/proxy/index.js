module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 是否在构建完成后打开默认浏览器
    host: '0.0.0.0', //监听地址
    port: 8080, // 端口
    https: false, // 是否有必须通过https的服务
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

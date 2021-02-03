module.exports = {
    lintOnSave: false,
    devServer: {
      port: 9000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          // 允许跨域
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  
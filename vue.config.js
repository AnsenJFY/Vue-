const path = require('path');

module.exports = {
  lintOnSave: true,
  baseUrl: './',
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@style', path.join(__dirname,'src/assets/style'));
  },
  // 设置代理，在本地环境做测试时，会自动将‘/api’转换成‘/mock'
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        pathRewrite:{
          '^/api':'/mock'
        }
      }
    }
  }
}
const path = require('path');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  baseUrl: './',
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@style', path.join(__dirname,'src/assets/style'))
      .set('@common',path.join(__dirname,'src/common'))
  },
  // 设置代理，在本地环境做测试时，会自动将‘/api’转换成‘/mock'
  devServer:{
    proxy:{
      '/api':{
        target:'http://192.168.43.159:8080',
        pathRewrite:{
          '^/api':'/mock'
        }
      }
    }
  }
}
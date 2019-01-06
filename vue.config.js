const path = require('path');

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@style', path.join(__dirname,'src/assets/style'));
  }
}
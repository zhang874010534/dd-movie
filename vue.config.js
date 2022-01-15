const path = require('path')
const needCdn = true


// cdn 外部扩展，通过 cdn 引入，不会被webpack打包
const assetsCDN = {
  // 模块名称和模块作用域命名（对应window里面挂载的变量名称
  externals: {
    moment: 'moment'
  },
  css: [
  ],
  js: [
    'https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js',  // 必须先引入moment，否则报错“TypeError: Cannot read property 'default' of undefined”
    'https://cdn.jsdelivr.net/npm/moment@2.29.1/locale/zh-cn.js', // 需同步引入语言包，否则日期选择控件等将默认显示为英文
  ]
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: (config) => {
    config.externals = needCdn ? assetsCDN.externals : {}
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    //使用tag修改参数
    config.plugin('html').tap((args) => {
      if (needCdn) {
        args[0].cdn = assetsCDN
      }
      return args
    })
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
  }
};

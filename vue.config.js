
module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    
    config.resolve.alias
      .set('@', resolve('src'))
  }
};

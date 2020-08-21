module.exports = {
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/scss/_variables.scss"; @import "@/scss/_mixins.scss";`
        }
      }
    },
    devServer: {
        host: 'localhost',
        disableHostCheck: true,
        port: 5000
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
     
        svgRule.uses.clear();
     
        svgRule
          .use('babel-loader')
          .loader('babel-loader')
          .end()
          .use('vue-svg-loader')
          .loader('vue-svg-loader');
      },
  };
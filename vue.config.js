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
      inlineSvgRule = config.module.rule('inline-svg');

      svgRule
          .exclude
          .add(/inline\.(.*)\.svg/)
          .end()

      inlineSvgRule
          .test(/inline\.(.*)\.svg/)
          .use('vue-svg-loader')
          .loader('vue-svg-loader')
      },
  };
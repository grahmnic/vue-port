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
      const svgRule = config.module.rule('svg')

      svgRule.uses.clear()
  
      svgRule
        .oneOf('inline')
        .resourceQuery(/inline/)
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
        .end()
        .oneOf('external')
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/[name].[hash:8].[ext]'
        })
      },
  };
module.exports = {
    chainWebpack: config => {
       
        config.module
            .rule("vue")
            .use("vue-svg-inline-loader")
                .loader("vue-svg-inline-loader")
                .options({ /* ... */ });
    },

    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/services',
          '/services/websites-and-apps'
        ],
        useRenderEvent: false,
        headless: true,
        onlyProduction: true
      }
    }
};

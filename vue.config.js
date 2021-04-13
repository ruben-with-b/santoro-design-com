var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
    chainWebpack: config => {
      config.module
          .rule("vue")
          .use("vue-svg-inline-loader")
              .loader("vue-svg-inline-loader")
              .options({ /* ... */ });
    
      
      if (process.env.NODE_ENV !== 'production') return
      
      return {
        plugins: [
          new PrerenderSpaPlugin(
            // Absolute path to compiled SPA
            path.resolve(__dirname, 'dist'),
            // List of routes to prerender
            [ '/',
              '/about',
              '/services',
              '/services/websites-and-apps',
              '/services/print',
              '/services/corporate-design',
            ],
          ),
        ]
      }
    }
};

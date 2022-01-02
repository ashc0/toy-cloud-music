const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        compression: {
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            }
        },
        bundleAnalyzerPlugin: {}
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex'
        },
        plugins: [
            new BundleAnalyzerPlugin()
        ]


    }
}
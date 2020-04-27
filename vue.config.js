const CompressionWebpackPlugin = require('compression-webpack-plugin')
const baseUrl = './'
module.exports = {
  publicPath: baseUrl,
  outputDir: 'html',
  lintOnSave: process.env.NODE_ENV === 'development',
  css: {
    // 开启 CSS source maps
    sourceMap: process.env.NODE_ENV === 'development'
  },
  productionSourceMap: false,
  configureWebpack: {
    // index.html 中的title
    name: 'Basic Vue',

    // 打包排除CDN引入的依赖
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n'
    },

    // js 和 css 开启压缩
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  chainWebpack(config) {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    // 配置CDN减少打包体积。加速首屏加载速度
    const cdn = {
      js: [
        'https://cdn.jsdelivr.net/npm/vue@2.6.11',
        'https://unpkg.com/vue-router@3.1.6/dist/vue-router.min.js',
        'https://unpkg.com/axios@0.18.0/dist/axios.min.js',
        'https://unpkg.com/vuex@3.3.0/dist/vuex.min.js',
        'https://unpkg.com/vue-i18n@8.17.4/dist/vue-i18n.min.js'
      ]
    }

    config.plugin('html').tap((args) => {
      args[0].cdn = cdn
      return args
    })
  },
  // 配置转发代理
  devServer: {
    open: false,
    host: '127.0.0.1',
    port: 80,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: '127.0.0.1:8080',
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}

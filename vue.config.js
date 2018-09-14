module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/note/'
    : '/',
  devServer: {
    port: 8089
  },
  productionSourceMap: false, // 生产环境不生成map
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /.*\.html/, // 所有的html请求都缓存都采用网络优先策略缓存
          handler: 'networkFirst', // 网络优先
          options: {
            networkTimeoutSeconds: 5 // 10秒未获取资源定位到缓存
          }
        },
        {
          urlPattern: /.*\.(?:js|css)/, // css和js文件采用cacheFirst手段
          handler: 'cacheFirst'// 缓存优先
        },
        {
          urlPattern: /.*demo\.jpg/, // demojpg采用缓存优先
          handler: 'cacheFirst'
        },
      ]
    }
  }
}
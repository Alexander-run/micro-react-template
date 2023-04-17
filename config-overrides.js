const appName= require('./package.json').name

module.exports = {
  webpack: function override(config, env) {
    config.output.library = `${appName}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${appName}`;
    config.output.globalObject = 'window';

    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);

      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      config.open = false;
      config.historyApiFallback = true;
      config.hot = false;
      // config.watchContentBase = false;
      config.liveReload = false;

      return config;
    };
  },
  dev: {
    proxyTable: {
      '/onestop-management': {
        target: 'https://dev-oop.advai.cn',
        changeOrigin: true,
      },
    }
  }
};
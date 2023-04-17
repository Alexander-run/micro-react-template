const path = require('path');
const {
  override,
  overrideDevServer,
  addWebpackAlias,
} = require('customize-cra');

const overrideDevServerConfig = () => (configFunction) => {
  
  configFunction.historyApiFallback = {
    rewrites: [
      { from: /.*/, to: '/index.html' },
    ],
  }
  return configFunction
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src')
    })
  ),
  devServer: overrideDevServer(overrideDevServerConfig())
}

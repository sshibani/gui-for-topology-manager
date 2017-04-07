const webpackConfigAssign = require('webpack-config-assign');
 


module.exports = function(env) {
  const baseConfig = require('./config/webpack.config.base');
  const devConfig = require('./config/webpack.config.dev');
  const prodConfig = require('./config/webpack.config.prod');

  let config = {};
  if(typeof env != "undefined" && env.production)  {
    config = prodConfig;
  } else {
    config = devConfig;
  }

   //config = env.development ? devConfig : prodConfig;
 
  return webpackConfigAssign(baseConfig, config);
};
const path = require('path');
const { DefinePlugin } = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { GlobCopyWebpackPlugin } = require('@angular/cli/plugins/webpack');

const env = {
  production: true,
  localEndPoint: '/api/',
  showDebugMessages: true
};


module.exports = {
  output: {
    path: path.join(process.cwd(), "/../build"),
  },
   plugins: [
     new ProgressPlugin((c, msg) => {
       return null;
     }),
     new DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(env.localEndPoint),
          'production': env.production
        }
     }),
   ],
};
const path = require('path');
const { DefinePlugin } = require('webpack');

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
     new DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(env.localEndPoint),
          'production': env.production
        }
     })
   ],
};
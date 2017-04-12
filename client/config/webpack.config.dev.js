const path = require('path');
const { DefinePlugin } = require('webpack');

const env = {
  production: false,
  // localEndPoint: "http://34.249.176.174:99/api/"
  // localEndPoint: "/assets/data/"
  localEndPoint: 'http://localhost:99/api/',
  showDebugMessages: true
}

module.exports = {
  output: {
    path: path.join(process.cwd(), "dist"),
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
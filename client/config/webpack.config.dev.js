const path = require('path');
const { DefinePlugin } = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = {
  production: false,
  // localEndPoint: "http://34.249.176.174:99/api/"
  // localEndPoint: "/assets/data/"
  localEndPoint: 'http://g4tm.azurewebsites.net/api/',
  showDebugMessages: true
}

module.exports = {
  output: {
    path: path.join(process.cwd(), "dist"),
  },
   plugins: [
     new CopyWebpackPlugin([
      { from: path.join('src', 'assets'), to: 'assets' },
    ]),
    new ProgressPlugin(),
    new DefinePlugin({
      'process.env': {
        'API_URL': JSON.stringify(env.localEndPoint),
        'production': env.production
      }
    })
   ],
};

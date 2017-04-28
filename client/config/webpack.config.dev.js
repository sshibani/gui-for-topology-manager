const path = require('path');
const { DefinePlugin } = require('webpack');
const { GlobCopyWebpackPlugin } = require('@angular/cli/plugins/webpack');

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
     new GlobCopyWebpackPlugin({
      patterns: [
        "assets"
      ],
      globOptions: {
        cwd: process.cwd() + "/src",
        dot: true,
        ignore: "**/.gitkeep"
      }
    }),
     new DefinePlugin({
        'process.env': {
          'API_URL': JSON.stringify(env.localEndPoint),
          'production': env.production
        }
     })
   ],
};
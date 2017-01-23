/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

(function (global) {
  var paths = {
    'npm:': 'lib/'
  }
  // map tells the System loader where to look for things
  var map = {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'ts':                         'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript':                 'npm:typescript@2.0.2/lib/typescript.js',
      'moment':                     'npm:moment',
      'ng2-bootstrap':              'npm:ng2-bootstrap'
    }
   // packages tells the System loader how to load when no filename and/or no extension

  var packages = {
      app: { main: './main.js', defaultExtension: 'js' },
      rxjs: { defaultExtension: 'js' },
      // 'ng2-bootstrap': { format: 'cjs', main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
      'ng2-bootstrap': {main: './index.js', defaultExtension: 'js' },
      'moment':  { main: 'moment.js', defaultExtension: 'js' },
      'angular2-in-memory-web-api': { main: './index.js', defaultExtension: 'js'}
    }

  System.config({
    paths: paths,
    map: map,
    packages: packages
  });
})(this);

(function(app) {
  var bootstrap = ng.platformBrowserDynamic.bootstrap;
    
  // bootstrap Angular App
  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(app.AppComponent);
  });

})(window.app || (window.app = {}));

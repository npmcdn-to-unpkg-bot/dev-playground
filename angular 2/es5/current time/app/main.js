(function(app) {
  var bootstrap = ng.platformBrowserDynamic.bootstrap;
  var AppComponent = app.AppComponent;
  
  // bootstrap Angular App
  document.addEventListener('DOMContentLoaded', function() {
    bootstrap(AppComponent);
  });

})(window.app || (window.app = {}));

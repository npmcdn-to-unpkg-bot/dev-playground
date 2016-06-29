(function(app) {
  var Class = ng.core.Class;
  
  app.TimeService = Class({
    constructor: function TimeService() {},
    
    getCurrentTime: function(callback) {
      callback(new Date().toLocaleTimeString());
      
      setInterval(function() {
        callback(new Date().toLocaleTimeString());
      }, 1000);
    }
  });
  
})(window.app || (window.app = {}));

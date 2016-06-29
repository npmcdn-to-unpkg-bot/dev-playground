(function functionName(app) {
    var Class = ng.core.Class;
    var Component = ng.core.Component;
    var TimeService = app.TimeService;
    
    app.CurrentTimeComponent = Component({
      selector: 'current-time',
      template: '<h3>{{ time }}</h3>',
    })
    .Class({
      constructor: [TimeService, function CurrentTimeComponent(_timeService) {
        _self = this;
        
        _timeService.getCurrentTime(function(time) {
          _self.time = time;
        });
      }]
    });
    
})(window.app || (window.app = {}));


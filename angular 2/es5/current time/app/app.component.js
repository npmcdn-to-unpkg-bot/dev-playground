(function(app) {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var CurrentTimeComponent = app.CurrentTimeComponent;
  var TimeService = app.TimeService;
  
  app.AppComponent = Component({
    selector: 'my-app',
    template: '<h1>Current Time</h1><current-time></current-time>',
    directives: [CurrentTimeComponent],
    providers: [TimeService]
  })
  .Class({
    constructor: function AppComponent() { }
  });
})(window.app || (window.app = {}));

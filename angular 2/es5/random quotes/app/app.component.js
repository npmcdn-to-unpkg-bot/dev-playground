(function(app) {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var RandomQuoteComponent = app.RandomQuoteComponent;
  var QuoteService = app.QuoteService;
  
  app.AppComponent = Component({
    selector: 'my-app',
    template: '<h1>Random Quotes</h1><p><random-quote></random-quote></p>',
    directives: [RandomQuoteComponent],
    providers: [QuoteService]
  })
  .Class({
    constructor: function AppComponent(){}
  });

})(window.app || (window.app = {}));

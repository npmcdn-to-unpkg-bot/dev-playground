(function(app) {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  
  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p>{{ quote.line }}</p><em>-- {{ quote.author }}</em>'
  })
  .Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService){ 
      var _self = this;
      
      quoteService.generateRandomQuotes(3, 3000, function(quote) {
          _self.quote = quote;
      });
    }]
  });
  
})(window.app || (window.app = {}));

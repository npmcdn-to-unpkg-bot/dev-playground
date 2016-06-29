'use strict';

(function (app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var RandomQuoteComponent = app.RandomQuoteComponent;

  app.AppComponent = Component({
    selector: 'my-app',
    directives: [RandomQuoteComponent],
    providers: [QuoteService],
    template: '<h1>Random Quote!</h1>' + '<p><random-quote></random-quote></p>'
  }).Class({
    constructor: function AppComponent() {
      // empty
    }
  });
})(window.app || (window.app = {}));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandomQuoteComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _quote = require('./quote.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RandomQuoteComponent = exports.RandomQuoteComponent = (_dec = (0, _core.Component)({
  selector: 'random-quote',
  template: '<em>{{quote.line}}</em> - {{quote.author}}'
}), _dec(_class = function RandomQuoteComponent(quoteService) {
  var _this = this;

  _classCallCheck(this, RandomQuoteComponent);

  quoteService.generateRandomQuotes(3, 2000, function (quote) {
    return _this.quote = quote;
  });
}) || _class);
(0, _core.Inject)(_quote.QuoteService)(RandomQuoteComponent, null, 0);
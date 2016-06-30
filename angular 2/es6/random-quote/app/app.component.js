'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _quote = require('./quote.service');

var _randomQuote = require('./random-quote.component');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
  selector: 'my-app',
  directives: [_randomQuote.RandomQuoteComponent],
  providers: [_quote.QuoteService],
  template: '\n    <h1>Random Quote!</h1>\n    <p><random-quote></random-quote></p>\n  '
}), _dec(_class = function AppComponent() {
  _classCallCheck(this, AppComponent);
}) || _class);
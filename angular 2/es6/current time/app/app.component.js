'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _currentTime = require('./current-time.component');

var _time = require('./time.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
  selector: 'my-app',
  template: '\n    <h1>Current Time</h1>\n    <current-time></current-time>\n  ',
  directives: [_currentTime.CurrentTimeComponent],
  providers: [_time.TimeService]
}), _dec(_class = function AppComponent() {
  _classCallCheck(this, AppComponent);
}) || _class);
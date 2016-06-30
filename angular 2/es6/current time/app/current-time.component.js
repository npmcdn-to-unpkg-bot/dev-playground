'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentTimeComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _time = require('./time.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrentTimeComponent = exports.CurrentTimeComponent = (_dec = (0, _core.Component)({
  selector: 'current-time',
  template: '\n    <h2>{{ currentTime }}</h2>\n  '
}), _dec(_class = function CurrentTimeComponent(_timeService) {
  var _this = this;

  _classCallCheck(this, CurrentTimeComponent);

  _timeService.getCurrentTime(function (time) {
    _this.currentTime = time;
  });
}) || _class);
(0, _core.Inject)(_time.TimeService)(CurrentTimeComponent, null, 0);
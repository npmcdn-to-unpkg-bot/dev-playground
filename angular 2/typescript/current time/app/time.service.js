System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeService;
    return {
        setters:[],
        execute: function() {
            TimeService = (function () {
                function TimeService() {
                }
                TimeService.prototype.getCurrentTime = function (callback) {
                    callback(new Date().toLocaleTimeString());
                    setInterval(function () { return callback(new Date().toLocaleTimeString(), 1000); });
                };
                return TimeService;
            }());
            exports_1("TimeService", TimeService);
        }
    }
});

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exchangeCurrencyService;
    return {
        setters:[],
        execute: function() {
            exchangeCurrencyService = (function () {
                function exchangeCurrencyService() {
                }
                exchangeCurrencyService.prototype.getExchangeCurrency = function (baseCurrency, targetCurrency) {
                    return 0.7;
                };
                return exchangeCurrencyService;
            }());
            exports_1("exchangeCurrencyService", exchangeCurrencyService);
        }
    }
});

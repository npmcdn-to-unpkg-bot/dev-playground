System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ExchangeCurrencyService;
    return {
        setters:[],
        execute: function() {
            ExchangeCurrencyService = (function () {
                function ExchangeCurrencyService() {
                    this.supportedCurrencies = ["USD", "EUR", "GBP"];
                    this.exchangeRates = {
                        "EUR/GBP": 0.8007,
                        "EUR/USD": 1.1397,
                        "GBP/EUR": 1.2478,
                        "GBP/USD": 1.4225,
                        "USD/EUR": 0.8778,
                        "USD/GBP": 0.7029
                    };
                }
                ExchangeCurrencyService.prototype.getExchangeCurrency = function (baseCurrency, targetCurrency) {
                    if (baseCurrency === targetCurrency)
                        return 1;
                    return this.exchangeRates[baseCurrency + '/' + targetCurrency];
                };
                return ExchangeCurrencyService;
            }());
            exports_1("ExchangeCurrencyService", ExchangeCurrencyService);
        }
    }
});

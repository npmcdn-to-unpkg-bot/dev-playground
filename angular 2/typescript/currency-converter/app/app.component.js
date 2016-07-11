System.register(['@angular/core', './exchange-currency.service', './currency-select.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, exchange_currency_service_1, currency_select_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exchange_currency_service_1_1) {
                exchange_currency_service_1 = exchange_currency_service_1_1;
            },
            function (currency_select_component_1_1) {
                currency_select_component_1 = currency_select_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(exchangeCurrencyService) {
                    this.exchangeCurrencyService = exchangeCurrencyService;
                    this.baseCurrency = "USD";
                    this.targetCurrency = "GBP";
                    this.baseAmount = 1;
                }
                Object.defineProperty(AppComponent.prototype, "targetAmount", {
                    get: function () {
                        var exchangeRate = this.exchangeCurrencyService.getExchangeCurrency(this.baseCurrency, this.targetCurrency);
                        return this.baseAmount * exchangeRate;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.isInvalid = function (value) {
                    return !Number.isFinite(value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'currency-converter',
                        providers: [exchange_currency_service_1.ExchangeCurrencyService],
                        directives: [currency_select_component_1.CurrencySelectComoponent],
                        template: "\n    <input type=\"number\" [(ngModel)]=\"baseAmount\" [class.error]=\"isInvalid(baseAmount)\">\n    \n    <p>\n        <strong>{{ baseAmount }}</strong> \n        <currency-select [(selected)]=\"baseCurrency\"></currency-select> = \n        <strong>{{ targetAmount }}</strong> \n        <currency-select [(selected)]=\"targetCurrency\"></currency-select>\n    </p>\n    <p *ngIf=\"isInvalid(baseAmount)\">Please add a valid number</p>\n  ",
                        styles: ["\n      input[type=number]{\n        width: 100px;\n        padding: 10px;  \n      }\n      \n      .error {\n          background-color: #c86060;\n      }\n    "]
                    }), 
                    __metadata('design:paramtypes', [exchange_currency_service_1.ExchangeCurrencyService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

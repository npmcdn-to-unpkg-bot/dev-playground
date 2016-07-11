System.register(['@angular/core', './exchange-currency.service'], function(exports_1, context_1) {
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
    var core_1, exchange_currency_service_1;
    var CurrencySelectComoponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exchange_currency_service_1_1) {
                exchange_currency_service_1 = exchange_currency_service_1_1;
            }],
        execute: function() {
            CurrencySelectComoponent = (function () {
                function CurrencySelectComoponent(exchangeCurrency) {
                    this.exchangeCurrency = exchangeCurrency;
                    this.selectedChange = new core_1.EventEmitter();
                    this.supportedCurrencies = exchangeCurrency.supportedCurrencies;
                }
                CurrencySelectComoponent.prototype.onSelectedChange = function (newSelected) {
                    this.selected = newSelected;
                    this.selectedChange.emit(newSelected);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CurrencySelectComoponent.prototype, "selected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CurrencySelectComoponent.prototype, "selectedChange", void 0);
                CurrencySelectComoponent = __decorate([
                    core_1.Component({
                        selector: 'currency-select',
                        template: "\n<select [ngModel]=\"selected\" (ngModelChange)=\"onSelectedChange($event)\">\n    <option *ngFor=\"let currency of supportedCurrencies\" [value]=\"currency\">\n        {{ currency }}\n    <option>\n</select>\n    "
                    }), 
                    __metadata('design:paramtypes', [exchange_currency_service_1.ExchangeCurrencyService])
                ], CurrencySelectComoponent);
                return CurrencySelectComoponent;
            }());
            exports_1("CurrencySelectComoponent", CurrencySelectComoponent);
        }
    }
});

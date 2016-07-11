System.register(['@angular/core', './time.service'], function(exports_1, context_1) {
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
    var core_1, time_service_1;
    var CurrentTimeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (time_service_1_1) {
                time_service_1 = time_service_1_1;
            }],
        execute: function() {
            CurrentTimeComponent = (function () {
                function CurrentTimeComponent(timeService) {
                    var _this = this;
                    timeService.getCurrentTime(function (time) {
                        _this.currentTime = time;
                    });
                }
                CurrentTimeComponent = __decorate([
                    core_1.Component({
                        selector: 'current-time',
                        template: "\n        <p>{{ currentTime }}</p>\n    ",
                        providers: [time_service_1.TimeService]
                    }), 
                    __metadata('design:paramtypes', [time_service_1.TimeService])
                ], CurrentTimeComponent);
                return CurrentTimeComponent;
            }());
            exports_1("CurrentTimeComponent", CurrentTimeComponent);
        }
    }
});

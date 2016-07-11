import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeCurrencyService } from './exchange-currency.service';

@Component({
    selector: 'currency-select',
    template: `
<select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
    <option *ngFor="let currency of supportedCurrencies" [value]="currency">
        {{ currency }}
    <option>
</select>
    `
})

export class CurrencySelectComoponent {
    @Input() selected: string;
    @Output() selectedChange = new EventEmitter();
    
    supportedCurrencies: string[];
    
    constructor(private exchangeCurrency: ExchangeCurrencyService){
        this.supportedCurrencies = exchangeCurrency.supportedCurrencies;
    }
    
    onSelectedChange(newSelected){
        this.selected = newSelected;
        this.selectedChange.emit(newSelected);
    }
}

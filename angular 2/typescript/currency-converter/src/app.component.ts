import { Component } from '@angular/core';
import { ExchangeCurrencyService } from './exchange-currency.service';
import { CurrencySelectComoponent } from './currency-select.component';
import { FixedPipe } from "./fixed.pipe";

@Component({
  selector: 'currency-converter',
  providers: [ExchangeCurrencyService],
  directives: [ CurrencySelectComoponent ],
  pipes: [FixedPipe],
  template: `
    <input type="number" [(ngModel)]="baseAmount" [class.error]="isInvalid(baseAmount)">
    
    <p>
        <strong>{{ baseAmount }}</strong> 
        <currency-select [(selected)]="baseCurrency"></currency-select> = 
        <strong>{{ targetAmount | fixed }}</strong> 
        <currency-select [(selected)]="targetCurrency"></currency-select>
    </p>
    <p *ngIf="isInvalid(baseAmount)">Please add a valid number</p>
  `,
  styles: [`
      input[type=number]{
        width: 100px;
        padding: 10px;  
      }
      
      .error {
          background-color: #c86060;
      }
    `]
})

export class AppComponent {
    baseCurrency = "USD";
    targetCurrency = "GBP";
    
    baseAmount = 1;
    
    constructor(private exchangeCurrencyService: ExchangeCurrencyService){
        
    }
    
    get targetAmount() {
        const exchangeRate = this.exchangeCurrencyService.getExchangeCurrency(this.baseCurrency, this.targetCurrency);
        return this.baseAmount * exchangeRate;
    }
    
    isInvalid(value){
        return !Number.isFinite(value);
    }
    
}

import {Component} from '@angular/core';
import {QuoteService} from './quote.service';
import {RandomQuoteComponent} from './random-quote.component';

@Component({
  selector: 'my-app',
  directives: [RandomQuoteComponent],
  providers: [QuoteService],
  template: `
    <h1>Random Quote!</h1>
    <p><random-quote></random-quote></p>
  `
})

export class AppComponent{}

import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import { Quote } from './quote';
@Component({
  selector: 'random-quote',
  template: '<em>{{quote.line}}</em> - {{quote.author}}'
})
export class RandomQuoteComponent {
  quote;
  
  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuotes(3, 2000, quote => this.quote = quote);
  }
}

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  date = new Date();
  quotes: Quote[] = [
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, this.date),
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, this.date),
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, this.date),
  ];
  addNewQuote(quote) {
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, new Date(2017, 5, 20)),
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, new Date(2015, 2, 15)),
    new Quote('author', 'quote', 'quoteSubmitter', 1, 3, new Date(2019, 9, 2)),
  ];
  addNewQuote(quote) {
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {}
}

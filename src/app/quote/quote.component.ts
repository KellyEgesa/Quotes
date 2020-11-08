import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Nelson Mandela',
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
      'Kelly Egesa',
      0,
      0,
      new Date(2017, 5, 20)
    ),
    new Quote(
      'Mother Teresa',
      'Spread love everywhere you go. Let no one ever come to you without leaving happier',
      'Brian Saul',
      0,
      0,
      new Date(2015, 2, 15)
    ),
    new Quote(
      'Benjamin Franklin',
      'Tell me and I forget. Teach me and I remember. Involve me and I learn',
      'Joe Harris',
      1,
      3,
      new Date(2019, 9, 2)
    ),
  ];
  addNewQuote(quote) {
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {}
}

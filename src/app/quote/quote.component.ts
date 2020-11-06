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
    {
      author: 'author',
      quote: 'quote',
      quoteSubmitter: 'quoteSubmitter',
      upVote: 1,
      downVote: 3,
      timePast: this.date,
    },
    {
      author: 'author',
      quote: 'quote',
      quoteSubmitter: 'quoteSubmitter',
      upVote: 1,
      downVote: 3,
      timePast: this.date,
    },
    {
      author: 'author',
      quote: 'quote',
      quoteSubmitter: 'quoteSubmitter',
      upVote: 1,
      downVote: 3,
      timePast: this.date,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

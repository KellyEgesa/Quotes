import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-quote-details',
  templateUrl: './display-quote-details.component.html',
  styleUrls: ['./display-quote-details.component.css'],
})
export class DisplayQuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Input() index: number;

  upVote(index) {
    this.quote[index].upVote = this.quote[index].upVote + 1;
  }

  downVote(index) {
    this.quote[index].downVote = this.quote[index].downVote + 1;
  }

  constructor() {}

  ngOnInit(): void {}
}

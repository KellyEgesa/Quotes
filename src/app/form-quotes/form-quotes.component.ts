import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { Quote } from '../quote';

@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.css'],
})
export class FormQuotesComponent implements OnInit {
  newQuote = new Quote('', '', '', 0, 0, new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote('', '', '', 0, 0, new Date());
  }

  constructor() {}
  ngOnInit(): void {}
}

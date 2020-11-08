import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-qoutes',
  templateUrl: './display-qoutes.component.html',
  styleUrls: ['./display-qoutes.component.css'],
})
export class DisplayQoutesComponent implements OnInit {
  constructor() {}
  @Input() quotes: Quote;
  @Output() toDelete = new EventEmitter<number>();

  deleteQuote(index: number) {
    this.toDelete.emit(index);
  }

  ngOnInit(): void {}
}

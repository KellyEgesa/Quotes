import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-qoutes',
  templateUrl: './display-qoutes.component.html',
  styleUrls: ['./display-qoutes.component.css'],
})
export class DisplayQoutesComponent implements OnInit {
  @Input() quotes: Quote;
  constructor() {}

  ngOnInit(): void {}
}

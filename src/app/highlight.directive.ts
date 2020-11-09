import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() quotes: Quote;
  @Input() index: number;

  constructor(private elem: ElementRef) {}
}

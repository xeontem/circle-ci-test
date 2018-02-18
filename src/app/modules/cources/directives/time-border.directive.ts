import { Directive, Input, OnInit, ElementRef, Renderer } from '@angular/core';
import { Cource } from '../reducers/cources.reducer';

@Directive({
  selector: '[time-border]'
})
export class TimeBorderDirective implements OnInit {
  @Input() cource: Cource;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    if (this.cource.date < new Date && this.cource.date >= new Date(Date.now() - 1000 * 60 * 60 * 24 * 14)) {
      this.renderer.setElementClass(this.el.nativeElement, 'label-fresh', true);
    }

    if (this.cource.date > new Date) {
      this.renderer.setElementClass(this.el.nativeElement, 'label-up', true);
    }
  }

}

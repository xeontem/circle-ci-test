import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'custom-date-input',
  templateUrl: './custom-date-input.component.html',
  styleUrls: ['./custom-date-input.component.scss']
})
export class CustomDateInputComponent implements OnInit {
  @Input()    date: Date;
  @Output() outdate: Date;
            current: string;
  constructor() { }

  ngOnInit() {
    const localDate = this.date.toLocaleString();
    this.current = localDate.slice(0, localDate.indexOf(','))
  }

}

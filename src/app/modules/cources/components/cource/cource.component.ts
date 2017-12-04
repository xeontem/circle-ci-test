import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Cource } from '../cources/cources.component';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss']
})
export class CourceComponent implements OnInit {
  @Input()cource: Cource;
  @Output()deletedCourceEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  delCource() {
    this.deletedCourceEvent.emit(this.cource.id);
  }

}

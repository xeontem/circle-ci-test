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
  @Output()editedCourceEvent = new EventEmitter<Cource>();
  constructor() { }

  ngOnInit() {
  }

  delCource(cource: Cource): void {
    this.deletedCourceEvent.emit(cource.id);
  }

  editCource(cource: Cource) {
    this.editedCourceEvent.emit(cource);
  }
}

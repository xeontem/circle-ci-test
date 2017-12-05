import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cource } from '../cources/cources.component';
import { Emit, logger } from '../../../../shared/methods.decorators';

@Component({
  selector: (x => (console.log(this), 'app-cource'))(),
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceComponent implements OnInit {
  @Input() cource: Cource;
  @Output() deletedCourceEvent = new EventEmitter<string>();
  @Output() editedCourceEvent = new EventEmitter<Cource>();

  constructor() { }

  ngOnInit() {
    console.log(this);

  }

  @Emit('deletedCourceEvent')
  delCource(cource: Cource): void {

  }

  @logger
  @Emit('editedCourceEvent')
  editCource(cource: Cource) {
    // this.editedCourceEvent.emit(cource);
  }
}

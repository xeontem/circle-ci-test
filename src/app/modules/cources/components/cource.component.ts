import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cource } from '../';
import { Emit, logger } from '../../../tools/methods.decorators';

@Component({
  selector: 'app-cource',
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

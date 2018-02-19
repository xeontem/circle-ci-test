import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cource } from '../reducers';
import { Emit, logger } from '../../../tools/methods.decorators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceComponent implements OnInit {
  @Input()  cource: Cource;
  @Output() deletedCourceEvent = new EventEmitter<string>();
  @Output() editedCourceEvent = new EventEmitter<Cource>();
  editedCource: FormGroup;
  editMode:     boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editedCource = this.fb.group({
      id:          [this.cource.id],
      title:       [this.cource.title,       Validators.required],
      description: [this.cource.description, Validators.required],
      date:        [this.cource.date,        Validators.required],
      duration:    [this.cource.duration,    Validators.required],
      topRated:    [this.cource.topRated]
    });
   }

  @Emit('deletedCourceEvent')
  delCource(id: string): void { }

  // @logger
  @Emit('editedCourceEvent')
  updateCource() {
    console.log(this.editedCource.value);
    this.editedCource.value.created = new Date;
    return this.editedCource.value;
  }

  @Emit('editedCourceEvent')
  toggleRateCource() {
    this.cource.topRated = !this.cource.topRated;
    return this.cource;
  }
}

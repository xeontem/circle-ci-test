import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Cource } from '../';
import { Emit, logger } from '../../../tools/methods.decorators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type Hints = {
  description: string;
  date: string;
  duration: string;
  title: string;
}
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
  editMode: boolean = false;
  editedCource: FormGroup;
  hints: Hints = {
    description: 'string',
    date: 'mm/dd/yyyy',
    duration: 'Duration: ',
    title: 'string'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editedCource = this.fb.group({
      description: [this.cource.description, Validators.required],
      date: [this.cource.date, Validators.required],
      duration: [this.cource.duration, Validators.required],
      id: [this.cource.id],
      title: [this.cource.title, Validators.required],
      topRated: [this.cource.topRated]
    });
   }

  @Emit('deletedCourceEvent')
  delCource(cource: Cource): void {

  }

  // @logger
  @Emit('editedCourceEvent')
  updateCource() {
    console.log(this.editedCource.value);
    this.editedCource.value.created = new Date;
    return this.editedCource.value;
  }

  toggleEditMode(cource: Cource) {
    this.editMode = !this.editMode;
  }

  @Emit('editedCourceEvent')
  toggleRateCource() {
    this.cource.topRated = !this.cource.topRated;
    console.log(this.cource.id, 'rated: ', this.cource.topRated);
    return this.cource;
  }
}

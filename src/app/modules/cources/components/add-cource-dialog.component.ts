import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Cource } from '../';
import { Emit } from '../../../tools/methods.decorators';

type Hints = {
  description: string;
  date: string;
  duration: string;
  title: string;
}

@Component({
  selector: 'cources-add-cource-dialog',
  templateUrl: './add-cource-dialog.component.html',
  styleUrls: ['./add-cource-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourceDialogComponent implements OnInit {
  @Output() newCourceEvent = new EventEmitter<string>();
  newCource: FormGroup;
  hints: Hints = {
    description: 'string',
    date: 'mm/dd/yyyy',
    duration: 'Duration: ',
    title: 'string'
  };

  constructor(
    public dialogRef: MatDialogRef<AddCourceDialogComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.newCource = this.fb.group({
      description: ['', Validators.required],
      date: [new Date, Validators.required],
      duration: [1.5, Validators.required],
      title: ['', Validators.required],
      topRated: [false]
    });
  }

  // @Emit('newCourceEvent')
  addNew(newCource: Cource) {
    this.dialogRef.close(newCource);
  }

}

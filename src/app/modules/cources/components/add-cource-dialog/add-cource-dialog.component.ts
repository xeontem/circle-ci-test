import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDatepicker, MatSuffix, MatFormFieldControl, MatInput } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { Cource } from '../cources/cources.component';
import { Emit } from '../../../../shared/methods.decorators';

type Hints = {
  description: string;
  date: string;
  duration: string;
  title: string;
}

@Component({
  selector: 'cources-add-cource-dialog',
  templateUrl: './add-cource-dialog.component.html',
  styleUrls: ['./add-cource-dialog.component.scss']
})
export class AddCourceDialogComponent implements OnInit {
  @Output() newCourceEvent = new EventEmitter<string>();
  newCource: FormGroup;
  date: string = '';
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
      date: ['', Validators.required],
      duration: [1.5, Validators.required],
      id: ['#cource10'],
      title: ['', Validators.required],
    });
  }

  // @Emit('newCourceEvent')
  addNew(newCource: Cource) {
    this.dialogRef.close(newCource);
    // return newCource;
  }

}

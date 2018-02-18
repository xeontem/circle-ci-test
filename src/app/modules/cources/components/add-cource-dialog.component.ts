import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Cource } from '../reducers/cources.reducer';
import { Emit } from '../../../tools/methods.decorators';
import { validateDate } from '../../../validators/validateDate';


interface Hints {
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
      date: [new Date, [Validators.required, validateDate]],
      duration: [1.5, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      topRated: [false]
    });
  }
  // name: ['', Validators.required],
  // street: ['', Validators.minLength(3)],
  // city: ['', Validators.maxLength(10)],
  // zip: ['', Validators.pattern('[A-Za-z]{5}')]
  @Emit('newCourceEvent')
  addNew(newCource: Cource) {
    this.dialogRef.close(newCource);
  }

}

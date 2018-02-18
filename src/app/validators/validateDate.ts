import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

export function validateDate(c: FormControl) {
  console.dir(c);
  return null;
}



@Directive({
  selector: '[validateDate][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validateDate, multi: true }
  ]
})
export class DateValidator {}

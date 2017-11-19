import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { MatChipSelectionChange, MatChip, MatSelect, MatSelectChange } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // template driven form
  firstname = 'artsiom';
  lastname = 'kukharev';
  // selectedValue: string
  selectedFood: FormGroup
  
  // reactive form build
  foods: {value: string, viewValue: string}[] =
  [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'tacos-3', viewValue: 'Tacos2'}
  ];

  constructor(private fb: FormBuilder) { }
  
  ngOnInit():void {
    // reactive form build
    this.selectedFood = this.fb.group({
      reactValue: ''
    });
  }

  logForm(value: any) {
    console.log(value);
  }
}

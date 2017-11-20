import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { MatChipSelectionChange, MatChip, MatSelect, MatSelectChange } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Setoid from '../../classes/setoid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  setoidA: Setoid;
  setoidB: Setoid;
  // template driven form
  firstname: string = 'artsiom';
  lastname: string = 'kukharev';
  
  selectedValue: string
  selectedFood: FormGroup
  
  // reactive form build
  foods: {value: string, viewValue: string, hint: string}[] =
  [
    {value: 'steak-0', viewValue: 'Steak', hint: 'it\'s a hint'},
    {value: 'pizza-1', viewValue: 'Pizza', hint: 'it\'s a hint'},
    {value: 'tacos-2', viewValue: 'Tacos', hint: 'it\'s a hint'},
    {value: 'tacos-3', viewValue: 'Tacos2', hint: 'it\'s a hint'}
  ];

  constructor(private fb: FormBuilder) { }
  
  ngOnInit():void {
    // reactive form build
    this.selectedFood = this.fb.group({
      reactValue: ['', Validators.required]
    });

    // algebraic data types
    //------------------ Setoid ------------------
    this.setoidA = new Setoid('setoid');
    this.setoidB = new Setoid('setoid');
    console.log(this.setoidA.equals(this.setoidB));
    
  }

  tplDrivenSubmit(value: any) {
    console.log(value);
  }

  reactiveSubmit(value: any) {
    console.log(value);
  }
  checkValue() {
    console.log(this.selectedFood);
  }
}

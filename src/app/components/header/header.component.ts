import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { MatChipSelectionChange, MatChip, MatSelect, MatSelectChange } from '@angular/material';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // name = new FormControl()
  selectedValue: string
  foods: Array<{
    value: string,
    viewValue: string
  }>
  constructor() { }
  
  ngOnInit():void {
    this.foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  }
  takeValue(e:MatSelectChange) {
    console.log(e.value)
  }

}

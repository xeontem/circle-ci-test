import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,

    // material
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export default class HeaderModule { }

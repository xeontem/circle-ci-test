import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- Forms -------------------------------
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//-------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

//---------------------------------- this module -------------------------
import {
  ButtonsComponent,
  FormsComponent
} from './';

@NgModule({
  imports: [
    CommonModule,

    // forms
    FormsModule,
    ReactiveFormsModule,

    // material
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  declarations: [ButtonsComponent, FormsComponent],
  exports: [ ]
})
export class TemplatesModule { }

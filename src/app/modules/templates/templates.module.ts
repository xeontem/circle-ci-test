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
  MatOptionModule } from '@angular/material';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsComponent } from './components/forms/forms.component';

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
  exports: [ ButtonsComponent, FormsComponent ]
})
export class TemplatesModule { }

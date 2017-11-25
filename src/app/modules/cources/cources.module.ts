import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- material --------------------------------
import {
  MatToolbarModule
} from '@angular/material';

//------------------------------- routes -------------------------------  
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const courcesRoutes: Routes = [
  {
    path: 'cources',
    component: HeaderComponent,
    data: { title: 'cources page' }
  },
  { path: '',
    redirectTo: 'cources',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,

    // material
    MatToolbarModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ ]
})
export class CourcesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- material --------------------------------
import {
  MatToolbarModule
} from '@angular/material';

//------------------------------- routes -------------------------------  
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

export const homeRoutes: Routes = [
  {
    path: 'login',
    component: HeaderComponent,
    data: { title: 'Login page' }
  },
  { path: '',
    redirectTo: 'login',
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatToolbarModule
} from '@angular/material';

//------------------------------- routes -------------------------------  
import { Routes } from '@angular/router';

//-------------- my components -----------------------------------------
import { CourcesComponent } from './components/cources/cources.component';

export const courcesRoutes: Routes = [
  {
    path: 'cources',
    component: CourcesComponent,
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
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [ CourcesComponent ],
  exports: [ ]
})
export class CourcesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireStoreAuthGuard } from '../../guards/fire-store-auth.guard';

//-------------------------------- Forms -------------------------------  
import { ReactiveFormsModule } from '@angular/forms';

//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule
} from '@angular/material';

//------------------------------- routes -------------------------------  
import { Routes } from '@angular/router';

//-------------- my components -----------------------------------------
import { CourcesComponent } from './components/cources/cources.component';

export const courcesRoutes: Routes = [
  {
    path: 'cources',
    component: CourcesComponent,
    data: { title: 'cources page' },
    canActivate: [FireStoreAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,

    // forms
    ReactiveFormsModule,

    // material
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [FireStoreAuthGuard],
  declarations: [ CourcesComponent ],
  exports: [ ]
})
export class CourcesModule { }

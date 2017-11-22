import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//------------------------------- routes -------------------------------  
import { RouterModule, Routes } from '@angular/router';

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

//----------------------------- routes -----------------------------------------
const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'templates/forms',
    component: FormsComponent,
    data: { title: 'templates' }
  },
  {
    path: 'templates/buttons',
    component: ButtonsComponent,
    data: { title: 'templates' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
//-------------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),

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
  exports: [
    ButtonsComponent, FormsComponent
  ]
})
export default class TemplatesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------- material --------------------------------
import {

} from '@angular/material';

//------------------------------- routes -------------------------------  
import { Routes } from '@angular/router';

// import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ContentComponent } from './components/content/content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: ContentComponent,
    data: { title: 'Home page' }
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,

    // material

  ],
  declarations: [ ContentComponent, PageNotFoundComponent],
  exports: [ ]
})
export class HomeModule { }

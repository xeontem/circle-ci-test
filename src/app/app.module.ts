import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import AppComponent from './app.component';

//-------------------------------- FIreBase -------------------------------  
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//------------------------------- animations -------------------------------  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//------------------------------- routes -------------------------------  
import { RouterModule, Routes } from '@angular/router';

//-------------------------------- env for firebase ------------------------
import { environment } from "../environments/environment";

//------------------------------ my modules -------------------------------------
import HeaderModule from './modules/header/header.module';
import TemplatesModule from './modules/templates/templates.module';

//----------------------------- routes -----------------------------------------
const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: AppComponent,
    data: { title: 'Main page' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
//-------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    //animations
    BrowserAnimationsModule, //polyfill
    
    // my modules
    HeaderModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//-------------------------------- FIreBase -------------------------------  
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//------------------------------- animations -------------------------------  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//-------------------------------- material --------------------------------
import {
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger } from '@angular/material';

//------------------------------- routes -------------------------------  
import { RouterModule, Routes } from '@angular/router';

//-------------------------------- env for firebase ------------------------
import { environment } from "../environments/environment";

//------------------------------ my modules -------------------------------------
import TemplatesModule from './modules/templates/templates.module';
import { CourcesModule } from './modules/cources/cources.module';

//----------------------------- routes -----------------------------------------
import { homeRoutes } from './modules/cources/cources.module';
import { tplRoutes } from './modules/templates/templates.module';


const routes: Routes = [].concat(
  homeRoutes,
  tplRoutes,
  { path: '**', component: PageNotFoundComponent });

//-------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    //animations
    BrowserAnimationsModule, //polyfill

    // material
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // my modules
    CourcesModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

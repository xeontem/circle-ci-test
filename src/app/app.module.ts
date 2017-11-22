import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//-------------------------------- FIreBase -------------------------------  
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//------------------------------- animations -------------------------------  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//-------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger } from '@angular/material';

//------------------------------- routes -------------------------------  
import { RouterModule, Routes } from '@angular/router';

//-------------------------------- env for firebase ------------------------
import { environment } from "../environments/environment";

//------------------------------ my modules -------------------------------------
import HeaderModule from './modules/header/header.module';
import TemplatesModule from './modules/templates/templates.module';
import { HomeModule } from './modules/home/home.module';

//----------------------------- routes -----------------------------------------
import { homeRoutes } from './modules/home/home.module';
import { tplRoutes } from './modules/templates/templates.module';


const routes: Routes = homeRoutes.concat(tplRoutes);
console.log(routes);

//-------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    
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
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // my modules
    HomeModule,
    HeaderModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

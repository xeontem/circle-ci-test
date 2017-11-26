import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

//-------------------------------- FIreBase -------------------------------  
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//----------------------- my custom auth service ---------------------------
import { FirestoreAuthService } from './services/firestore-auth.service';

//------------------------------- animations -------------------------------  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//-------------------------------- material --------------------------------
import {
  MatCardModule,
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
import { courcesRoutes } from './modules/cources/cources.module';
import { tplRoutes } from './modules/templates/templates.module';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [].concat(
  courcesRoutes,
  tplRoutes,
  { path: 'home', component: HomeComponent },
  { path: 'denied', component: AccessDeniedComponent },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent });

//-------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,

    //animations
    BrowserAnimationsModule, //polyfill

    // material
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // my modules
    CourcesModule,
    TemplatesModule
  ],
  providers: [FirestoreAuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }

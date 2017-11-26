import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';

//----------------------- guard ------------------------------------------
import { FireStoreAuthGuard } from './guards/fire-store-auth.guard';

//-------------------- components from another modules --------------------
import { CourcesComponent } from './modules/cources/components/cources/cources.component';
import { FormsComponent } from './modules/templates/components/forms/forms.component';
import { ButtonsComponent } from './modules/templates/components/buttons/buttons.component';

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
import { TemplatesModule } from './modules/templates/templates.module';
import { CourcesModule } from './modules/cources/cources.module';

//----------------------------- routes -----------------------------------------


const routes: Routes = [
  // templates module
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
  // cources module
  {
    path: 'cources',
    component: CourcesComponent,
    data: { title: 'cources page' },
    canActivate: [FireStoreAuthGuard]
  },
  // this module
  { path: 'home', component: HomeComponent },
  { path: 'denied', component: AccessDeniedComponent },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
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
    RouterModule.forRoot(routes),

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

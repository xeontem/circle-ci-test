import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';

//-------------------------------- ngrx store -----------------------------
import { StoreModule } from '@ngrx/store';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './shared/utils';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { reducers, metaReducers } from './store';

//----------------------- guard ------------------------------------------
import { FireStoreAuthGuard } from './guards/fire-store-auth.guard';

//-------------------- components from another modules --------------------
import { CourcesComponent } from './modules/cources/components/cources/cources.component';
import { FormsComponent } from './modules/templates/components/forms/forms.component';
import { ButtonsComponent } from './modules/templates/components/buttons/buttons.component';
import { EventsComponent } from './modules/events/components/events/events.component';

//-------------------------------- FIreBase -------------------------------
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//----------------------- my custom auth service ---------------------------
import { FirestoreAuthService } from './services/firestore-auth.service';

//------------------------------- animations -------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { EventsModule } from './modules/events/events.module';
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
  // events module
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'events page' },
    // canActivate: [FireStoreAuthGuard]// TODO make an unlock button
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

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 2 }) : [],

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
    EventsModule,
    TemplatesModule
  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    FirestoreAuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

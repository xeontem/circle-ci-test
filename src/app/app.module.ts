import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// -------------------------------- ngrx store -----------------------------
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CustomRouterStateSerializer } from './tools/utils';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';

const a = 2;
// ---------------------------- this module --------------------------------
import {
  AppComponent,
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  AccessDeniedComponent,
  HomeComponent,
  // FireStoreAuthGuard,
  FirestoreAuthService,
  FcmMessagingService,
  FirestoreStorageService,
  HttpInterceptorService
} from './';

// -------------------- components from another modules --------------------
import { CourcesComponent } from './modules/cources/';
import { FormsComponent, ButtonsComponent } from './modules/templates/';
import { EventsComponent } from './modules/events/';
import { PersistentComponent } from './modules/persistent/';

// -------------------------------- FIreBase -------------------------------
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// ------------------------------- animations -------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// -------------------------------- material --------------------------------
import {
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger,
  MatSnackBarModule } from '@angular/material';

// ------------------------------- routes -------------------------------
import { RouterModule, Routes } from '@angular/router';

// -------------------------------- env for firebase ------------------------
import { environment } from '../environments/environment';

// ------------------------------ my modules -------------------------------------
import { TemplatesModule } from './modules/templates/templates.module';
import { EventsModule } from './modules/events/events.module';
import { CourcesModule } from './modules/cources/cources.module';
import { D3TestModule } from './modules/d3-test/d3-test.module';
import { PersistentModule } from './modules/persistent/persistent.module';

// ----------------------------- routes -----------------------------------------


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
  // events module
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'events page' },
    // canActivate: [FireStoreAuthGuard]// TODO make an unlock button
  },
  {
    path: 'persistent',
    component: PersistentComponent,
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
// -------------------------------------------------------------------------------
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
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

    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    AngularFireAuthModule,

    // animations
    BrowserAnimationsModule, // polyfill

    // material
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,

    // my modules
    CourcesModule,
    EventsModule,
    TemplatesModule,
    D3TestModule,
    PersistentModule
  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    FirestoreAuthService,
    FcmMessagingService,
    FirestoreStorageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//-------------------------------- FIreBase -------------------------------  
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//-------------------------------- Forms -------------------------------  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//------------------------------- animations -------------------------------  
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//-------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule } from '@angular/material';

//-------------------------------- env for firebase ------------------------
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    // AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    // forms
    FormsModule,
    ReactiveFormsModule,
    
    //animations
    BrowserAnimationsModule, //polyfill
    
    // material
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [HeaderComponent],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class AppModule { }

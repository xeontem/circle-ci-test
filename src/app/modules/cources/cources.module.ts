import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireStoreAuthGuard } from '../../guards/fire-store-auth.guard';

//-------------------------------- Forms -------------------------------
import { ReactiveFormsModule } from '@angular/forms';

//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule
} from '@angular/material';

//-------------- my components -----------------------------------------
import { CourcesComponent } from './components/cources/cources.component';
import { CourceComponent } from './components/cource/cource.component';

//------------------- services -----------------------------------------
import { ProvideCourcesService } from './services/provide-cources.service';
import { AddCourceDialogComponent } from './components/add-cource-dialog/add-cource-dialog.component';

//------------------- other module services -----------------------------------------
import { FirestoreAuthService } from '../../services/firestore-auth.service';
@NgModule({
  imports: [
    CommonModule,

    // forms
    ReactiveFormsModule,

    // material
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  entryComponents: [ AddCourceDialogComponent ],
  providers: [FireStoreAuthGuard, ProvideCourcesService, FirestoreAuthService],
  declarations: [ CourcesComponent, CourceComponent, AddCourceDialogComponent ],
  exports: [ ]
})
export class CourcesModule { }

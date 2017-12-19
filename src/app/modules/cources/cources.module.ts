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

//---------------------------------- this module ---------------------------------
import {
  CourcesComponent,
  CourceComponent,
  AddCourceDialogComponent,
  ConfirmDeletingComponent,
  TimeBorderDirective,
  ProvideCourcesService
} from './';

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
  entryComponents: [ AddCourceDialogComponent, ConfirmDeletingComponent ],
  providers: [FireStoreAuthGuard, ProvideCourcesService],
  declarations: [
    CourcesComponent,
    CourceComponent,
    AddCourceDialogComponent,
    ConfirmDeletingComponent,
    TimeBorderDirective
  ],
  exports: [ ]
})
export class CourcesModule { }

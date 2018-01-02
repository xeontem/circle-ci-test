import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireStoreAuthGuard } from '../../guards/fire-store-auth.guard';

//-------------------------------- Forms -------------------------------
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  MatSliderModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';

//---------------------------------- this module ---------------------------------
import {
  CourcesComponent,
  CourceComponent,
  AddCourceDialogComponent,
  ConfirmDeletingComponent,
  TimeBorderDirective,
  DurationPipe,
  OrderByPipe,
  ProvideCourcesService,
  FilterCourcesPipe
} from './';

@NgModule({
  imports: [
    CommonModule,

    // forms
    ReactiveFormsModule,
    FormsModule,

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
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  entryComponents: [ AddCourceDialogComponent, ConfirmDeletingComponent ],
  providers: [FireStoreAuthGuard, ProvideCourcesService, FilterCourcesPipe],
  declarations: [
    CourcesComponent,
    CourceComponent,
    AddCourceDialogComponent,
    ConfirmDeletingComponent,
    TimeBorderDirective,
    DurationPipe,
    OrderByPipe,
  ],
  exports: [ ]
})
export class CourcesModule { }

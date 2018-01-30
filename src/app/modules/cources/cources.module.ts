import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
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
  CustomDateInputComponent,
  TimeBorderDirective,
  DurationPipe,
  OrderByPipe,
  ProvideCourcesService,
  FilterCourcesPipe,
  reducers
} from './';

import { DateValidator } from '../../validators/validateDate';

@NgModule({
  imports: [
    CommonModule,
    //routes
    RouterModule.forChild([
      {
        path: 'cources',
        component: CourcesComponent,
        data: { title: 'cources page' },
        canActivate: [FireStoreAuthGuard]
      },
    ]),

    //ngrx store
    StoreModule.forFeature('courcesModule', reducers),
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
    CustomDateInputComponent,
    TimeBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterCourcesPipe,
    DateValidator
  ],
  exports: [ ]
})
export class CourcesModule { }

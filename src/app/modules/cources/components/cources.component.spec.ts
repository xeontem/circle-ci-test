import { Store } from '@ngrx/store';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourcesComponent } from './cources.component';
import { FilterCourcesPipe } from '../pipes/filter-cources.pipe';
import { ProvideCourcesService } from '../services/provide-cources.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  StoreStub,
  MatDialogStub,
  OrderByPipeStub,
  AppCourceStubComponent,
  FilterCourcesPipeStub,
  ProvideCourcesServiceStub,
} from '../../../../../tests/stubs';

import {
  MatIconModule,
  MatFormFieldModule,
  MatSliderModule,
  MatDatepickerModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatDialogModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSelect, MatOption, MatFormField, MatSpinner, MatDialog
} from '@angular/material';

describe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcesComponent, AppCourceStubComponent, OrderByPipeStub ],
      imports: [
      MatFormFieldModule,
        MatInputModule,
        FormsModule
      ],
      providers: [
        {provide: ProvideCourcesService, useClass: ProvideCourcesServiceStub },
        {provide: MatDialog, useClass: MatDialogStub },
        {provide: FilterCourcesPipe, useClass: FilterCourcesPipeStub },
        {provide: Store, useClass: StoreStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { CourcesComponent } from './cources.component';
import { FilterCourcesPipe } from '../pipes/filter-cources.pipe';
import { ProvideCourcesService } from '../services/provide-cources.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvideCourcesServiceStub, MatDialogStub, FilterCourcesPipeStub, StoreStub, CourceStubComponent } from '../../../../../tests/stubs';
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
  MatSelect, MatOption, MatFormField, MatSpinner
} from '@angular/material';

fdescribe('CourcesComponent', () => {
  let component: CourcesComponent;
  let fixture: ComponentFixture<CourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcesComponent, MatSelect, MatOption, MatFormField, MatSpinner, CourceStubComponent ],
      imports: [
        // MatSelectModule,
        FormsModule
      ],
      providers: [
        {provide: ProvideCourcesService, useClass: ProvideCourcesServiceStub },
        {provide: MatDialog, useClass: MatDialogStub },
        {provide: FilterCourcesPipe, useClass: FilterCourcesPipeStub },
        // {provide: OrderByPipe, useClass: OrderByPipeStub },
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

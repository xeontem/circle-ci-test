import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatSliderModule,
  MatDialogModule,


  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,

  DateAdapter,
  MAT_DATE_FORMATS,

  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import { ConfirmDeletingComponent } from './confirm-deleting.component';
import { MatDialogRefStub } from '../../../../../tests/stubs';

describe('ConfirmDeletingComponent', () => {
  let component: ConfirmDeletingComponent;
  let fixture: ComponentFixture<ConfirmDeletingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeletingComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogRefStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

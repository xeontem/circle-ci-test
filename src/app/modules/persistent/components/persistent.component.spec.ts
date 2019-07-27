import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CalculatePersistentNumbersService } from '../services/calculate-persistent-numbers.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatIconModule,
  MatFormFieldModule,
  MatSliderModule,
  MatDatepickerModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatOptionModule,
  MatSelect, MatOption, MatFormField, MatSpinner, MatDialog
} from '@angular/material';

import { PersistentComponent } from './persistent.component';

describe('PersistentComponent', () => {
  let component: PersistentComponent;
  let fixture: ComponentFixture<PersistentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        HttpClientModule,
      ],
      declarations: [ PersistentComponent ],
      providers: [CalculatePersistentNumbersService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

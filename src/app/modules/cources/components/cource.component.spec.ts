import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CourceComponent } from './cource.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { cource } from '../../../../../tests/stubs';
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
  MatSelectModule
} from '@angular/material';

@Pipe({ name: 'duration' })
class DurationPipeStub implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}

describe('CourceComponent', () => {
  let component: CourceComponent;
  let fixture: ComponentFixture<CourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceComponent ],
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSliderModule,
        MatIconModule,
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceComponent);
    component = fixture.componentInstance;
    component.cource = cource;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CourceComponent } from './cource.component';
// import { DurationPipe } from '../pipes/duration.pipe';
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

import { Pipe, PipeTransform } from '@angular/core';
import { getInt, getFraction, toHalfHour } from '../../../tools/lambda';
@Pipe({ name: 'duration' })
class DurationPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }

}

describe('CourceComponent', () => {
  let component: CourceComponent;
  let fixture: ComponentFixture<CourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourceComponent, DurationPipe ],
      imports: [
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSliderModule,
        MatIconModule,
      ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CustomDateInputComponent } from './custom-date-input.component';

describe('CustomDateInputComponent', () => {
  let component: CustomDateInputComponent;
  let fixture: ComponentFixture<CustomDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CustomDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateInputComponent);
    component = fixture.componentInstance;
    component.date = new Date;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

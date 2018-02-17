import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDateInputComponent } from './custom-date-input.component';

xdescribe('CustomDateInputComponent', () => {
  let component: CustomDateInputComponent;
  let fixture: ComponentFixture<CustomDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('custom date test')
    
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchFibonachchiComponent } from './church-fibonachchi.component';

xdescribe('ChurchFibonachchiComponent', () => {
  let component: ChurchFibonachchiComponent;
  let fixture: ComponentFixture<ChurchFibonachchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchFibonachchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchFibonachchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

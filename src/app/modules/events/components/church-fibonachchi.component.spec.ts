import { Store } from '@ngrx/store';
import { StoreStub } from '../../../../../tests/stubs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChurchFibonachchiComponent } from './church-fibonachchi.component';

describe('ChurchFibonachchiComponent', () => {
  let component: ChurchFibonachchiComponent;
  let fixture: ComponentFixture<ChurchFibonachchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchFibonachchiComponent ],
      providers: [
        {provide: Store, useClass: StoreStub },
      ]
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

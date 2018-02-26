import { Store } from '@ngrx/store';
import { StoreStub } from '../../../../../tests/stubs';
import { YCombinatorComponent } from './y-combinator.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('YCombinatorComponent', () => {
  let component: YCombinatorComponent;
  let fixture: ComponentFixture<YCombinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCombinatorComponent ],
      providers: [
        {provide: Store, useClass: StoreStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

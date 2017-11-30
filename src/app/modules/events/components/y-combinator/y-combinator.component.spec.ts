import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCombinatorComponent } from './y-combinator.component';

describe('YCombinatorComponent', () => {
  let component: YCombinatorComponent;
  let fixture: ComponentFixture<YCombinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCombinatorComponent ]
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourceDialogComponent } from './add-cource-dialog.component';

describe('AddCourceDialogComponent', () => {
  let component: AddCourceDialogComponent;
  let fixture: ComponentFixture<AddCourceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

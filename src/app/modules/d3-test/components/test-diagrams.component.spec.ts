import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { D3ExamplesService } from '../services/d3-examples.service';

import {
  D3ExamplesServiceStub
} from '../../../../../tests/stubs';

import { TestDiagramsComponent } from './test-diagrams.component';

describe('TestDiagramsComponent', () => {
  let component: TestDiagramsComponent;
  let fixture: ComponentFixture<TestDiagramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDiagramsComponent ],
      providers: [
        {provide: D3ExamplesService, useClass: D3ExamplesServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

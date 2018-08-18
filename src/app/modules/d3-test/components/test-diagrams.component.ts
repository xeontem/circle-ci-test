import { Component, OnInit, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { D3ExamplesService, Test } from '../services/d3-examples.service';

@Component({
  selector: 'app-test-diagrams',
  templateUrl: './test-diagrams.component.html',
  styleUrls: ['./test-diagrams.component.scss']
})
export class TestDiagramsComponent implements OnInit, AfterViewInit {
  tests: Test[];

  constructor(
    private d3Test: D3ExamplesService,
    private ref: ElementRef
  ) {}

  ngAfterViewInit() {
    const elems = Array.from(this.ref.nativeElement.firstChild.querySelectorAll('article'));
    elems.forEach((elem, i) => {
      this.d3Test[`test${i}`](elem);
    });
  }

  ngOnInit() {
    this.tests = this.d3Test.tests;
  }

}

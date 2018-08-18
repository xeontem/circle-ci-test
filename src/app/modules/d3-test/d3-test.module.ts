import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiagramsComponent } from './components/test-diagrams.component';
import { RouterModule } from '@angular/router';
import { D3ExamplesService } from './services/d3-examples.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'diagrams',
        component: TestDiagramsComponent,
        data: { title: 'diagrams page' },
      },
    ])
  ],
  providers: [
    D3ExamplesService
  ],
  declarations: [TestDiagramsComponent]
})
export class D3TestModule { }

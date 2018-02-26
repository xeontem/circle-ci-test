import { Component, Input } from '@angular/core';
import { Cource } from '../../../src/app/modules/cources/reducers/';
@Component({
  selector: 'app-cource',
  template: '<span>app-cource-stub</span>'
})
export class AppCourceStubComponent {
  @Input() cource: Cource;
}

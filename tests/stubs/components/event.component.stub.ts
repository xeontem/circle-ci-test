import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  template: '<span>event-stub</span>'
})
export class EventStubComponent {
  @Input() event: any;
 }

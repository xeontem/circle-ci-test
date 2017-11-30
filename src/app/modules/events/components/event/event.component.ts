import { Component, Input, OnInit } from '@angular/core';
import { SelectedEvent } from '../../reducers/events.reducer';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input()event: SelectedEvent;
  lang:          string = 'en';
  langs:         Array<{name: string, val: string}>;

  constructor() {
    this.langs = [
      {name: 'English', val: 'en'},
      {name: 'Russian', val: 'ru'},
      {name: 'Belarussian', val: 'be'},
      {name: 'Dutch', val: 'nl'},
      {name: 'French', val: 'fr'},
      {name: 'Japanese', val: 'ja'}
    ];
  }

  ngOnInit() { }

}

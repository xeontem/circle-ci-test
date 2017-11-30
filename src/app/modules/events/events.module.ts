import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EventsComponent } from './components/events/events.component';
import { EventContentComponent } from './components/event-content/event-content.component';
import { FetchEventsService } from './services/fetch-events.service';

//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

    // material
    MatButtonModule,
  ],
  declarations: [EventsComponent, EventContentComponent],
  providers: [ FetchEventsService ]
})
export class EventsModule { }

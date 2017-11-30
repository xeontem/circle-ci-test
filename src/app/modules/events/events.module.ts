import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EventsComponent } from './components/events/events.component';
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
import { EventComponent } from './components/event/event.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

    // material
    MatButtonModule,
  ],
  declarations: [EventsComponent, EventComponent, TranslatePipe],
  providers: [ FetchEventsService ]
})
export class EventsModule { }

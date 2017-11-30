import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EventsComponent } from './components/events/events.component';
import { FetchEventsService } from './services/fetch-events.service';
import { FetchTranslateService } from './services/fetch-translate.service';


//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';
import { EventComponent } from './components/event/event.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { YCombinatorComponent } from './components/y-combinator/y-combinator.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,

    // material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: [EventsComponent, EventComponent, TranslatePipe, YCombinatorComponent],
  providers: [ FetchEventsService, FetchTranslateService ]
})
export class EventsModule { }

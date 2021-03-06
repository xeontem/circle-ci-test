import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// -------------------------------- material --------------------------------
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

// -------------------------- this module ------------------------------------
import {
  EventsComponent,
  EventComponent,
  YCombinatorComponent,
  ChurchFibonachchiComponent,
  TranslatePipe,
  FetchEventsService,
  FetchTranslateService
} from './';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,

    // material
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: [EventsComponent, EventComponent, TranslatePipe, YCombinatorComponent, ChurchFibonachchiComponent],
  providers: [ FetchEventsService, FetchTranslateService ]
})
export class EventsModule { }

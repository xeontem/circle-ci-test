import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { EventStubComponent, YCombinatorStubComponent, ChurchFibonachchiStubComponent } from '../../../../../tests/stubs';
import { EventComponent } from './event.component';
import { FetchEventsService } from '../services/fetch-events.service';
import { FetchEventsServiceStub } from '../../../../../tests/stubs';
import { Store } from '@ngrx/store';
import { StoreStub } from '../../../../../tests/stubs';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsComponent,
        EventStubComponent,
        YCombinatorStubComponent,
        ChurchFibonachchiStubComponent
      ],
      providers: [
        {provide: FetchEventsService, useClass: FetchEventsServiceStub},
        {provide: Store, useClass: StoreStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

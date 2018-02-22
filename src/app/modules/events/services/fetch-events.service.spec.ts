import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FetchEventsService } from './fetch-events.service';

describe('FetchEventsService', () => {
  let injector: TestBed;
  let service: FetchEventsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchEventsService]
    });
    injector = getTestBed();
    service = injector.get(FetchEventsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch events', () => {
    const events = [{name: 'test-event'}];

    service.getEvents().subscribe((evts: [{}]) => {
      expect(evts.length).toBe(1);
      expect(evts).toEqual(events);
    });

    const req = httpMock.expectOne({ method: 'GET', url: service.url });
    req.flush(events);
    expect(req.request.method).toBe('GET');
  });

});

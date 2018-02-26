import { Observable } from 'rxjs/Observable';

export class FetchEventsServiceStub {
  getEvents = () => Observable.of([]);
}

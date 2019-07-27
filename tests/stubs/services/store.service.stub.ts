import { Observable } from 'rxjs/Observable';

export class StoreStub {
  currentMessage = { subscribe: x => x };
  getPermissionAndUpdateToken() {}
  select = func => Observable.of([{}]);
}

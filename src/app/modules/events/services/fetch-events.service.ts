import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchEventsService {
  url = 'https://damp-earth-84904.herokuapp.com/events';
  constructor(public http: HttpClient) { }
  getEvents = () => this.http.get(this.url);
}

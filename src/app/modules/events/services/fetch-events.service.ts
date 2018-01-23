import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchEventsService {

  constructor(public http:HttpClient) {
    // console.log('events service connected');
   }

  getEvents() {
    return this.http.get('https://damp-earth-84904.herokuapp.com/events')
      .map(res => res);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.dir(request);

    return next.handle(request).do((event: HttpEvent<any>) => {
      console.dir(event);
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      console.dir(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}

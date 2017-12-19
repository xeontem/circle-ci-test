import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirestoreAuthService } from '../services/firestore-auth.service';

import 'rxjs/add/operator/do';
@Injectable()
export class FireStoreAuthGuard implements CanActivate {

  constructor(private auth: FirestoreAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.isAuthenticated()
        .do(loggedIn => !loggedIn && this.router.url !== '/denied' && this.router.navigate(['/denied']))
  }
}

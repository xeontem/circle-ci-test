import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { FirestoreAuthService } from '../services/firestore-auth.service';

@Injectable()
export class FireStoreAuthGuard implements CanActivate {
  
  constructor(private auth: FirestoreAuthService, private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.auth.user
           .take(1)
           .map(user => !!user)
           .do(loggedIn => {
             if (!loggedIn) {
               console.log('access denied')
               this.router.url !== '/denied' && this.router.navigate(['/denied']);
              //  this.router.url !== '/home' && this.router.navigate(['/home']);
              }
            //  }
         })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreAuthService } from '../../services/firestore-auth.service';


// import { logo } from '/assets/images/logo.svg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: FirestoreAuthService, private router: Router) { }

  ngOnInit() {
    // this.auth.map(x => console.log(x));
    
  }

  async login() {
    await this.auth.googleLogin();
    this.router.navigate(['/cources']);
  }

  logout() {
    this.auth.signOut();
    // this.router.navigate(['/home'])
  }
}

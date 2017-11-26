import { Component, OnInit } from '@angular/core';

import { FirestoreAuthService } from '../../services/firestore-auth.service';


// import { logo } from '/assets/images/logo.svg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: FirestoreAuthService) { }

  ngOnInit() {
    // this.auth.map(x => console.log(x));
    
  }

}

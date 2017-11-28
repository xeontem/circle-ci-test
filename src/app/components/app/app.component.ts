import { Component, OnInit } from '@angular/core';
import { Functor } from '../../classes/functor';
import { Apply } from '../../classes/apply';

interface Capitalize {
  (text: string): string;
};

// const capitalize: Capitalize = (s) => s[0].toUpperCase() + s.slice(1);
const capitalize = s => s.split('').reduce((a, v, i) => i === 1 ? a.toUpperCase() + v : a + v);

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  functor: Functor<string>;
  apply: Apply<string>;
  applyF: Apply<Capitalize>;

  constructor() { }

  ngOnInit():void { 
    
    // functor
    this.functor = new Functor('xeontem');
    const upper: Functor<string> = this.functor.map(capitalize);
    console.log(upper);

    // apply
    this.applyF = new Apply(capitalize);
    this.apply = new Apply('xeontem');
    const upperA: Apply<string> = this.apply.ap(this.applyF);
    console.log(upperA);
    
  }
}

import { Component, OnInit } from '@angular/core';
// import { FcmMessagingService } from '../../services/fcm-messaging.service';
// import '../../service-workers/app.component.worker.js';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.fcm.messaging.sendToDevice()
    // const worker = new Worker('../../service-workers/app.component.worker.js');

  }
}


// import { Component, OnInit } from '@angular/core';
// import { Functor } from '../../classes/functor';
// import { Apply } from '../../classes/apply';
// import { Setoid } from '../../classes/setoid';
// import { Applicative } from '../../classes/applicative';
// import { Monad } from '../../classes/monad';
// interface Capitalize {
//   (text: string): string;
// };

// // const capitalize: Capitalize = (s) => s[0].toUpperCase() + s.slice(1);
// const capitalize = s => s.split('').reduce((a, v, i) => i === 1 ? a.toUpperCase() + v : a + v);

// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;
// console.log(c);


// @Component({
//   selector: 'app-component',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })


// export class AppComponent implements OnInit {
//   setoid: Setoid<number>;
//   functor: Functor<string>;
//   apply: Apply<string>;
//   applyF: Apply<Capitalize>;
//   applicative: Applicative<string>;
//   applic2: Applicative<number>;
//   monad: Monad<number>;
//   constructor() { }

//   ngOnInit():void {

//     // Setoid
//     this.setoid = new Setoid(123);
//     // console.log(this.setoid.equals(new Setoid(22)));

//     // functor
//     this.functor = new Functor('xeontem');
//     const upper: Functor<string> = this.functor.map(capitalize);
//     // console.log(upper);

//     // apply
//     this.applyF = new Apply(capitalize);
//     this.apply = new Apply('xeontem');
//     const upperA: Apply<string> = this.apply.ap(this.applyF);
//     // console.log(upperA);

//     // applicative
//     this.applicative = new Applicative('xeontem');
//     this.applic2 = this.applicative.of(123);

//     // monad
//     const plus = (a: number) => (b: number): number => a + b;
//     const plusT = (a: number) => (b: number) => (c: number): number => a + b + c;
//     const plusTwo = plus(2);
//     // plusTwo(10);
//     const monadize = (val: number): Monad<number> => new Monad(val + 10);


//     this.monad = new Monad(2);
//     console.log(this.monad.map(monadize));
//     console.log(this.monad.flatMap(monadize));
//     console.log(this.monad.map(plus));
//     console.log(this.monad.lift2(plus)(new Monad(10)));
//     console.log(this.monad.lift3(plusT)(new Monad(10))(new Monad(20)));


//   }
// }

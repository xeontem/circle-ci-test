import { ViewChild, Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

// import { AppState } from '../../redux/state';
import { StorePerf, STORE_PREFWITH } from '../actions/events.action';
import { EventsState, perfWithSelector, withValueSelector } from '../reducers/events.reducer';
import { State } from '../../../store';
import * as λ from '../../../tools/lambda';

//decorators
import { perf } from '../../../tools/methods.decorators';
import { SetDefault } from '../../../tools/class.decorators';
@Component({
  selector: 'church-fibonachchi',
  templateUrl: './church-fibonachchi.component.html',
  styleUrls: ['./church-fibonachchi.component.scss']
})
export class ChurchFibonachchiComponent implements OnInit {
  @ViewChild('fibo') fibo: ElementRef;

  perfWith: number;
  withValue: number;
  dragstartStream$: Subscription;
  dragenterStream$: Subscription;
  dragoverStream$: Subscription;
  dragleaveStream$: Subscription;
  dropStream$: Subscription;
  dragendStream$: Subscription;
  clickStream$: Subscription;
  bodyoverStream$: Subscription;
  initLayerX: number;
  initLayerY: number;
  cookies: { topf?: string, leftf?: string };

  constructor(
    private cd: ChangeDetectorRef,
    private elements: ElementRef,
    private store: Store<EventsState>) { }

  ngOnInit() {

    // ------------------------------ define element ------------------------------
    const el = this.fibo.nativeElement;

    //--------------------------------- check cookies for coords ---------------------
    this.cookies = λ.getCookie();
    // console.log(this.cookies);

    //-------------------------------- set position --------------------------
    el.style.top = this.cookies.topf || `${~~(document.documentElement.offsetHeight / 2)}px`;// default
    el.style.left = this.cookies.leftf || `${300}px`;// default

    //------------------------------- handle drag -----------------------------------
    this.dragstartStream$ = Observable.fromEvent(el, 'dragstart').subscribe(e => this.handleDragStart(e, el));
    this.dragenterStream$ = Observable.fromEvent(el, 'dragenter').subscribe(e => this.handleDragEnter(e, el));
    this.dragoverStream$ = Observable.fromEvent(el, 'dragover').subscribe(e => this.handleDragOver(e, el));
    this.dragleaveStream$ = Observable.fromEvent(el, 'dragleave').subscribe(e => this.handleDragLeave(e, el));
    this.dragendStream$ = Observable.fromEvent(el, 'dragend').subscribe(e => this.handleDragEnd(e, el));
    this.dropStream$ = Observable.fromEvent(el, 'drop').subscribe(e => this.handleDrop(e, el), err => console.dir(err));
    this.bodyoverStream$ = Observable.fromEvent(document.body, 'dragover').subscribe(e => this.handledragoverBody(e))
  }

  handledragoverBody(e) {
    // e.dataTransfer.dropEffect = 'move';
  }

  handleDragStart(e, el) {

    this.initLayerX = e.layerX;
    this.initLayerY = e.layerY;
    el.style.opacity = '0.4';
  }

  handleDragEnter(e, el) {
    el.classList.add('drag-over');
  }

  handleDragOver(e, el) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  }

  handleDragLeave(e, el) {
    el.classList.remove('drag-over');  // this / e.target is previous target element.
  }

  handleDrop(e, el) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    return false;
  }

  handleDragEnd(e, el) {
    //------------------------ apply pos to elem ---------------------------
    el.style.opacity = '1';
    el.style.top = `${e.pageY - this.initLayerY - 20}px`;// 20 - padding
    el.style.left = `${e.pageX - this.initLayerX - 10}px`;// 10 - padding
    el.classList.remove('drag-over');
    //------------------------ store pos into cookies ----------------------
    let expire = new Date(new Date().getTime() + 60 * 1000).toUTCString();// set expire date
    document.cookie = `topf=${el.style.top}; path=/; expires=${expire}`;
    document.cookie = `leftf=${el.style.left}; path=/; expires=${expire}`;
  }

  @perf
  withYcombinator() {
    // memoize
    var I = x => x;
    var K = x => y => x;
    var A = f => x => f(x);
    var B = f => g => x => f(g(x));
    var S = f => x => z => f(z)(x(z));
    var C = f => x => y => f(y)(x);
    var Y = f => (x => x(x))(x => y => f(x(x))(y));

    var pred = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);

    var Num = {
      zero: K(I),
      one: A,
      two: S(B)(A),
      three: S(B)(S(B)(A)),
      five: S(B)(S(B)(S(B)(S(B)(A)))),
      succ: S(B),
      plus: C(A)(S(B)),
      minus: C(C(A)(pred)),
      mult: n => m => f => x => n(m(f))(x),
      numToJS: n => n(x => x + 1)(0)
    }

    var Boolean = {
      TRUE: K,
      FALSE: C(K),
      cond: v => t => f => v(t)(f),
      not: b => b(Boolean.FALSE)(Boolean.TRUE),
      and: b1 => b2 => b1(b2)(b1),
      or: b1 => b2 => b1(b1)(b2),
      boolToJS: v => Boolean.cond(v)(true)(false)
    };

    var { cond, not, or, TRUE, FALSE, boolToJS } = Boolean;
    var { plus, succ, minus, mult, zero, one, two, three, five, numToJS } = Num;

    var isZero = n => n(x => FALSE)(TRUE);
    var equal = m => n => isZero(minus(m)(n));


    //Pairs
    var Pair = a => b => f => f(a)(b);
    var Fst = p => p(TRUE);
    var Snd = p => p(FALSE);

    var Pred = n => s => z =>
      Snd(n(p => Pair(s(Fst(p)))(Fst(p)))(Pair(z)(z)));

    //factorial
    // var fact = (x => x(x))(x => y => (f => n =>
    //   cond(isZero(n))
    //     (succ(zero))
    //     (x => mult(n)(f(pred(n)))(x)))(x(x))(y));

    var fact = Y(f => n =>
      cond(isZero(n))
        (succ(zero))
        (x => mult(n)(f(pred(n)))(x)));


    const fibF = f => n => n === 0 || n === 1 ? 1 : f(n - 1) + f(n - 2);
    const fib = Y(fibF);

    const fibChurchF = f => n =>
      cond(or(isZero(n))(equal(n)(succ(zero))))
        (succ(zero))
        (x => plus(f(pred(n)))(f(pred(pred(n))))(x));
    const fibChurch = Y(fibChurchF);

    // console.dir(boolToJS(or(isZero(three))(equal(three)(succ(zero)))));
    const ten = mult(two)(five);
    const twenty = mult(ten)(two);
    const thirty = mult(three)(ten);
    console.dir(numToJS(fibChurch(twenty)))

    this.withValue = fib(20);
    // console.dir(fib(10))
  }
}

// const I = x => x;
// const K = x => y => x;
// const S = f => x => z => f(z)(x(z));
// const B = f => g => x => f(g(x));
// const A = f => x => f(x);
// const C = f => x => y => f(y)(x);
// const Y = f => (x => x(x))(x => y => f(x(x))(y));

// const zero    = K(I);
// const pred    = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
// const succ    = S(B);
// const minus   = C(C(A)(pred));
// const plus    = C(A)(S(B));
// const mult    = B;
// const numToJS = n => n(x => x + 1)(0)

// const TRUE = K;
// const FALSE = C(K);
// const isZero = n => n(x => FALSE)(TRUE);
// const equal = m => n => isZero(minus(m)(n));
// const or = b1 => b2 => b1(b1)(b2);
// const cond = v => t => f => v(t)(f);

// const fibChurchF = f => n =>
//   cond(or(isZero(n))(equal(n)(succ(zero))))
//     (succ(zero))
//     (x => plus(f(pred(n)))(f(pred(pred(n))))(x));
// const fibChurch = Y(fibChurchF);

// const one = succ(zero);
// const two = succ(one);
// const five = plus(one)(plus(two)(two));
// const ten = mult(two)(five);
// const twenty = mult(ten)(two);



// console.log(numToJS(fibChurch(twenty)));


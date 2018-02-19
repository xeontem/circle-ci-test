import { ViewChild, Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

// import { AppState } from '../../redux/state';
import { StorePerf, STORE_PREFWITH } from '../actions/events.action';
import { EventsState, perfWithSelector, withValueSelector } from '../reducers/events.reducer';
import { State } from '../../../store';
import * as λ from '../../../tools/lambda';

// decorators
import { perf } from '../../../tools/methods.decorators';
import { SetDefault } from '../../../tools/class.decorators';

@Component({
  selector: 'app-y-combinator',
  templateUrl: './y-combinator.component.html',
  styleUrls: ['./y-combinator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@SetDefault('cookies', {})
export class YCombinatorComponent implements OnInit {
  @ViewChild('comb') comb: ElementRef;

  perfWith$:        Observable<number>;
  withValue$:       Observable<number>;
  perfWithout:      number;
  withoutValue:     number;
  dragstartStream$: Subscription;
  dragenterStream$: Subscription;
  dragoverStream$:  Subscription;
  dragleaveStream$: Subscription;
  dropStream$:      Subscription;
  dragendStream$:   Subscription;
  clickStream$:     Subscription;
  bodyoverStream$:  Subscription;
  initLayerX:       number;
  initLayerY:       number;
  cookies:          {top?: string, left?: string};

  constructor(
    private cd: ChangeDetectorRef,
    private elements: ElementRef,
    private store: Store<EventsState>) { }

  ngOnInit() {

    this.perfWith$ = this.store.select(perfWithSelector);
    this.withValue$ = this.store.select(withValueSelector);

    // ------------------------------ define element ------------------------------
    const el = this.comb.nativeElement;

    // --------------------------------- check cookies for coords ---------------------
      this.cookies = λ.getCookie();
      // console.log(this.cookies);

    // -------------------------------- set position --------------------------
    el.style.top = this.cookies.top || `${Math.ceil(document.documentElement.offsetHeight / 1.5)}px`; // default
    el.style.left = this.cookies.left || `${300}px`; // default

    // ------------------------------- handle drag -----------------------------------
    this.dragstartStream$ = Observable.fromEvent(el, 'dragstart').subscribe(e => this.handleDragStart(e, el));
    this.dragenterStream$ = Observable.fromEvent(el, 'dragenter').subscribe(e => this.handleDragEnter(e, el));
    this.dragoverStream$  = Observable.fromEvent(el, 'dragover').subscribe(e => this.handleDragOver(e, el));
    this.dragleaveStream$ = Observable.fromEvent(el, 'dragleave').subscribe(e => this.handleDragLeave(e, el));
    this.dragendStream$   = Observable.fromEvent(el, 'dragend').subscribe(e => this.handleDragEnd(e, el));
    this.dropStream$      = Observable.fromEvent(el, 'drop').subscribe(e => this.handleDrop(e, el), err => console.dir(err));
    this.bodyoverStream$  = Observable.fromEvent(document.body, 'dragover').subscribe(e => this.handledragoverBody(e));
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
    // ------------------------ apply pos to elem ---------------------------
    el.style.opacity = '1';
    el.style.top = `${e.pageY - this.initLayerY - 20}px`; // 20 - padding
    el.style.left = `${e.pageX - this.initLayerX - 10}px`; // 10 - padding
    el.classList.remove('drag-over');
    // ------------------------ store pos into cookies ----------------------
    const expire = new Date(new Date().getTime() + 60 * 1000).toUTCString(); // set expire date
    document.cookie = `top=${el.style.top}; path=/; expires=${expire}`;
    document.cookie = `left=${el.style.left}; path=/; expires=${expire}`;
  }

  @perf
  withYcombinator() {
    // memoize
    const fibMem = λ.Ymem(new Map())(λ.fibF);
    this.store.dispatch(new StorePerf({perfWith: 0, withValue: fibMem(40) }));
  }

  @perf
  withoutYcombinator() {
    this.withoutValue = λ.fib(40).toFixed(5);
  }
}

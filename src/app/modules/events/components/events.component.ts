import * as λ from '../../../tools/lambda';
import { Store } from '@ngrx/store';
import { State } from '../../../store';
import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FetchEventsService } from '../services/fetch-events.service';
import { SelectEvent, ChangeVal, CHANGE_OBJ_VAL, SELECT_EVENT } from '../actions/events.action';
import { EventsState, SelectedEvent, valueSelector, eventSelector } from '../reducers/events.reducer';
import { ViewChild, Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

@Component({
  selector:        'app-events',
  templateUrl:     './events.component.html',
  styleUrls:       ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent implements OnInit, OnDestroy  {
  @ViewChild('btn1')     button1:   ElementRef;
  @ViewChild('btn2')     button2:   ElementRef;
  @ViewChild('evntCont') container: ElementRef;


  result = 0;
  timer = 'button start/reset not pressed';
  types:                 Array<string> = ['workshop', 'webinar', 'lecture', 'deadline', 'event'];
  value$:                Observable<string>;
  events:                Array<SelectedEvent> = [];
  tempArr:               Array<number> = [];
  button2ClickStream$:   Subscription;
  containerClickStream$: Subscription;
  shakeStream$:          Subscription;
  sortByTypeStream$:     Subscription;
  reverseStream$:        Subscription;
  setVisibleStream$:     Subscription;
  selectedEvent$:        Observable<SelectedEvent>;
  calculateStream$:      BehaviorSubject<number[]>  = new BehaviorSubject([0, 0]);
  sortStream$:           BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private fetchEvents: FetchEventsService,
    private cd:          ChangeDetectorRef,
    private elements:    ElementRef,
    private store:       Store<EventsState>) { }

  calcMult() {
    this.calculateStream$.next([λ.randNumber(0)(10), λ.randNumber(0)(10)]);
  }

  startTimer() {
    interval(1000)
      .map(val => `button start/reset pressed a ${val} seconds ago`)
      .do(λ.set(this)('timer'))
      .subscribe(val => this.cd.markForCheck());
  }

  ngOnInit() {

    this.value$ = this.store.select(valueSelector);
    this.selectedEvent$ = this.store.select(eventSelector);

    this.containerClickStream$ = Observable.fromEvent(this.container.nativeElement, 'click')
      .switchMap((e: Event) => Observable.from(λ.pair
        (λ.getVal(e)('target'))
        (λ.getVal(λ.getVal(e)('target'))('parentNode'))))// TODO find right type of event
      .filter(λ.C(λ.B(λ.clCont)(λ.getClasList))('event'))// elem has class event?
      .pluck('id')
      .subscribe((id: number) => this.store.dispatch(new SelectEvent(λ.getVal(this.events)(id))));

    this.fetchEvents.getEvents()
      .map(λ.set(this)('events'))
      .map(events => λ.set(this)('tempArr')(λ.range(λ.length(events))))
      .switchMap(events => interval(5).take(λ.length(events)))// TODO compose
      .map(i => λ.B(λ.rand)(λ.K(this.tempArr.length))(i))
      .do(r => λ.B(λ.flipSet('visible')('visible'))(λ.B(λ.getVal(this.events))(λ.getVal(this.tempArr)))(r))
      .map(r => λ.C(λ.splice(this.tempArr))(1)(r))
      .subscribe(arr => this.cd.markForCheck());

    this.calculateStream$
      .map(λ.B(λ.set(this)('result'))(λ.reduce((f, num) => f(num))(λ.cGetSum)))
      .subscribe(res => this.cd.markForCheck());

  }

  changeProperty() {
    this.store.dispatch(new ChangeVal);
  }

  sortByType() {
    this.sortByTypeStream$ = interval(5)
      .take(this.events.length)
      .flatMap(i => Observable.from(this.events))
      .map((ev, j) => λ.cond(j >= this.events.length)(j % this.events.length)(j))
      .map(j => λ.condL(j < this.events.length - 1)
         ((x => λ.cond(λ.getType(this.events)(j) > λ.getType(this.events)(j + 1))
           ({bool: true, j})
           ({bool: false, j})))
         ((x => ({bool: false, j}))))
      .do(o => λ.condL(o.bool)(x => λ.swap(this.events)(o.j)(o.j + 1))(λ.I))
      .subscribe(i => this.cd.markForCheck());
  }

  reverse() {
    this.reverseStream$ = interval(5)
      .take(this.events.length / 2)
      .map(i => ({i, j: λ.cond(this.events.length - i - 1 < 0)(0)(this.events.length - i - 1)}))
      .do(o => λ.swap(this.events)(o.i)(o.j))
      .subscribe(i => this.cd.markForCheck());
  }

  shake() {
    this.shakeStream$ = interval(5)
    .take(this.events.length / 2)
    .map(i => ({i: λ.rand(this.events.length), j: λ.rand(this.events.length)}))
    .do(o => λ.swap(this.events)(o.i)(o.j))
    .subscribe(a => this.cd.markForCheck());
  }

  ngOnDestroy() {
    this.calculateStream$.unsubscribe();
  }
}

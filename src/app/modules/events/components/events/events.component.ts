import { ViewChild, Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FetchEventsService } from '../../services/fetch-events.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { interval as observableInterval } from 'rxjs/observable/interval';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SelectEvent, ChangeVal, CHANGE_OBJ_VAL, SELECT_EVENT } from '../../actions/events.action';
import { EventsState, SelectedEvent, valueSelector, eventSelector } from '../../reducers/events.reducer';
import { State } from '../../../../store';

const cond = x => t => f => x ? t : f;
const condL = x => tF => fF => x ? tF() : fF();
const swap = arr => i => j => [arr[i], arr[j]] = [arr[j], arr[i]];
const getType = arr => i => cond(arr[i])(arr[i].type)({});
const caclcSum = (a:number, b:number):number => a + b;
const calcMult = (a:number, b:number):number => a * b;
const getSum = (x:number, y:number):number => calcMult(caclcSum(x, y), caclcSum(x, y));
const randNumber = min => max => ~~(Math.random() * (max - min));

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


  types:                 Array<string> = ['workshop', 'webinar', 'lecture', 'deadline', 'event'];
  result:                number = 0;
  timer:                 string = 'button start/reset not pressed';
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
  // intervalStream$:       Observable<string>;
  calculateStream$:      BehaviorSubject<number[]>  = new BehaviorSubject([0, 0]);
  sortStream$:           BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private fetchEvents: FetchEventsService,
    private cd:          ChangeDetectorRef,
    private elements:    ElementRef,
    private store:       Store<EventsState>) { }

  calcMult() {
    this.calculateStream$.next([randNumber(0)(10), randNumber(0)(10)])
  }

  startTimer() {
    observableInterval(1000)
      .map(val => `button start/reset pressed a ${val} seconds ago`)
      .do(val => this.timer = val)
      .subscribe(val => this.cd.markForCheck());
  }

  ngOnInit() {

    this.value$ = this.store.select(valueSelector);
    this.selectedEvent$ = this.store.select(eventSelector);

    this.containerClickStream$ = Observable.fromEvent(this.container.nativeElement, 'click')
      .switchMap((e: Event) => Observable.from([e.target, e.target["parentNode"]]))// TODO find right type of event
      .filter((el: Element) => el.classList.contains('event'))
      .pluck('id')
      .subscribe((id:number) => this.store.dispatch(new SelectEvent(this.events[id])));

    this.fetchEvents.getEvents()
      .map(events => this.events = events)
      .switchMap(events => Observable.from(events))
      .map((event, index) => this.tempArr.push(index))
      .switchMap(i => observableInterval(5).take(this.events.length))
      .map(i => ~~(Math.random() * this.tempArr.length))
      .do(r => this.events[this.tempArr[r]].visible = 'visible')
      .map(r => this.tempArr.splice(r, 1))
      .subscribe(i => this.cd.markForCheck());

    this.calculateStream$
      .map((numArr: number[]) => this.result = getSum.apply(null, numArr)) // TODO figure out how to solve it
      .subscribe(res => this.cd.markForCheck());

    // this.intervalStream$ = observableInterval(1000)
    //   .map(val => `button start/reset pressed a ${val} seconds ago`)
  }

  changeProperty() {
    this.store.dispatch(new ChangeVal);
  }

  sortByType() {
    this.sortByTypeStream$ = Observable.interval(5)
      .take(this.events.length)
      .flatMap(i => Observable.from(this.events))
      .map((ev, j) => cond(j >= this.events.length)(j % this.events.length)(j))
      .map(j => condL(j < this.events.length-1)
        ((x => cond(getType(this.events)(j) > getType(this.events)(j+1))
          ({bool: true, j})
          ({bool: false, j})))
        ((x => ({bool: false, j}))))
      .map(o => condL(o.bool)(x => swap(this.events)(o.j)(o.j+1))(x => []))
      .subscribe(i => this.cd.markForCheck());
  }

  reverse() {
    this.reverseStream$ = observableInterval(5)
      .take(this.events.length/2)
      .map(i => ({i, j: cond(this.events.length-i-1 < 0)(0)(this.events.length-i-1)}))
      .map(o => swap(this.events)(o.i)(o.j))
      .subscribe(i => this.cd.markForCheck());
  }

  shake() {
    this.shakeStream$ = observableInterval(5)
    .take(this.events.length/2)
    .map(i => ({i: ~~(Math.random() * this.events.length), j: ~~(Math.random() * this.events.length)}))
    .do(o => swap(this.events)(o.i)(o.j))
    .subscribe(a => this.cd.markForCheck())
  }

  ngDoCheck() { }

  ngOnDestroy() {
    this.calculateStream$.unsubscribe();
  }
}

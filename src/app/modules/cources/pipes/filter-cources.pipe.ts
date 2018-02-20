import { Pipe, PipeTransform } from '@angular/core';
import { Cource } from '../reducers/cources.reducer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/reduce';

@Pipe({
  name: 'filterCources'
})
export class FilterCourcesPipe implements PipeTransform {

  transform(cources$: Observable<Cource[]>, val: string): Cource[] {
    // const obs = cources.switchMap(cources => Observable.from(cources));
    // console.dir(obs);

    // obs.filter(cource => cource.title.toLocaleLowerCase().includes(val.toLowerCase()))
    // // .reduce((acc, cource) => acc.concat([cource]), [])// flatMap(cource => Observable.(cource))
    // .toArray()
    // .do(val => console.log(val))
    // .subscribe(val => console.log(val))
    let filtered: Cource[] = [];
    cources$.do((cources: Cource[]) =>
      filtered = cources.filter((cource: Cource) => cource.title.toLocaleLowerCase().includes(val.toLowerCase())));
    return filtered;
    // .map(cources => {
        //   console.dir(cources.length)
        //   return cources;
        // })
  //   .subscribe(val => console.log(val))
  // cources.subscribe(
  //   val => console.log(val),
  //   err => console.log(err),
  //   () => console.log('done'))


//   .subscribe(cources => this.cources = Observable.of(cources))

        // this.searchCourceStream$ = this.cources
        // .subscribe(x => this.cd.markForCheck())
        // .switchMap(cources => Observable.from(cources))
        // .do(cource => console.log('after: ', cource))

      // this.cources = cond(val)
      //   (this.csprovider.getListByQuery('title', '==', val))
      //   (this.csprovider.getList()).valueChanges();
    //  cources;
  }

}

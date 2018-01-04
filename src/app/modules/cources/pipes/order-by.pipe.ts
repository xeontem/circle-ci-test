import { Pipe, PipeTransform } from '@angular/core';
import { Cource } from '../reducers/cources.reducer';
import { Order } from '../reducers';
import { cond, objKeyPredicate, objKeyLengthPredicate } from '../../../tools/lambda';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(cources: Cource[], key: Order): Cource[] {
    return cources && cources.sort(
      cond(key === 'description')
        (objKeyLengthPredicate(key))
        (objKeyPredicate(key)));
  }

}

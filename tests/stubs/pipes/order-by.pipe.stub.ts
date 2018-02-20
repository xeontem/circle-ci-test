import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipeStub implements PipeTransform {

  transform(cources) {
    return cources;
  }

}

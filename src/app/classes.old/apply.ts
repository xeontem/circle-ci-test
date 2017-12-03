import { Functor } from './functor';

export class Apply<T> extends Functor<T> {
  
  constructor(val: T) {
    super(val);
  } 

  //ap :: Apply A => A T ~> A (T -> B) -> A B
  ap<B>(func: Apply<(a: T) => B>): Apply<B> {
    return new Apply(this.map(func.val)['val']);
  }
}



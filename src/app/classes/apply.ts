import { Functor } from './functor';

export class Apply<a> extends Functor<a> {

  constructor(val: a) {
    super(val);
  }

  // ap :: Apply A => A a ~> A (a -> b) -> A b
  ap<b>(Af: Apply<(a: a) => b>): Apply<b> {
    return new Apply(super.map(Af.val)['val']);
  }

  map<b>(f: (a: a) => b): Apply<b> {
    return new Apply(super.map(f)['val']);
  }
}



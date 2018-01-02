import { Apply } from "./apply";

export class Applicative<a> extends Apply<a> {

  constructor(val: a) {
    super(val);
  }

  of<b>(val: b): Applicative<b> {
    return new Applicative(val);
  }

  ap<b>(Af: Applicative<(a: a) => b>): Applicative<b> {
    return new Applicative(super.map(Af.val)['val']);
  }

  map<b>(f: (a: a) => b): Applicative<b> {
    return new Applicative(super.map(f)['val']);
  }

}

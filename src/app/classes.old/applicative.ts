import { Apply } from "./apply";

export class Applicative<T> extends Apply<T> {

  constructor(val: T) {
    super(val);
  }

  of<B>(val: B): Applicative<B> {
    return new Applicative(val);
  }

}

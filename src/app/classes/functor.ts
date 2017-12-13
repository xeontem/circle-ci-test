export class Functor<T> {
  protected val: T;

  constructor(val: T) {
    this.val = val;
  }

  map<B>(f:(a: T) => B): Functor<B> {
    return new Functor(f(this.val));
  }
}

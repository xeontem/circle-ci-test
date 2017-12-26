export class Functor<T> {

  constructor(protected val: T) { }

  map<B>(f:(a: T) => B): Functor<B> {
    return new Functor(f(this.val));
  }
}

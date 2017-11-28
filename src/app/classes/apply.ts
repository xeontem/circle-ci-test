export class Apply<T> {
  private val: T;

  constructor(val: T) {
    this.val = val;
  }

  map<B>(f: (a: T) => B): Apply<B> {
    return new Apply(f(this.val));
  }

  ap<B>(f: Apply<(a: T)=> B>): Apply<B> {
    return this.map(f.val);
  }

}

import { Applicative } from "./applicative";

export class Monad<T> extends Applicative<T> {
  constructor(val: T) {
    super(val);
  }

  map<B>(func: (a: T) => B): Monad<B> {
    return new Monad(super.map(func)['val']);
  }

  ap<B>(func: Monad<(a: T) => B>): Monad<B> {
    return new Monad(super.ap(func)['val']);
  }

  flatten(): T {
    return this.val;
  }

  // bind || chain
  flatMap<B>(func: (a: T) => Monad<B>): Monad<B> {
    return this.map(func).flatten();
  }

  lift1(func) {
    return this.map(func);
  }

  lift2<B>(func: (a: T) => (b: T) => B): (mB: Monad<T>) => Monad<B> {
    return mB => mB.ap(this.map(func));
    // return mB => mB.ap(this.lift1(func));
  }

  lift3(func) {
    return mB => mC => mC.ap(mB.ap(this.map(func)));
    // return mB => mC => mC.ap(this.lift2(func)(mB));
  }
}

// const func = a => [`${a}`];
// const func = a => b => a + b;




// [2].map(func);// [[3]]
// [2].fm(func);// [3]
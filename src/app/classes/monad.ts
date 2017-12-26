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

  lift1<B>(func: (a: T) => B): Monad<B> {
    return this.map(func);
  }
  //lift2:: Monad M => Ma -> (a -> b -> c) -> Mb -> Mc
  lift2<B, C>(func: (a: T) => (b: B) => C): (mB: Monad<B>) => Monad<C> {
    return mB => mB.ap(this.map(func));
    // return mB => mB.ap(this.lift1(func));
  }

  lift3<b,c,d>(func: (a:T) => (b:b) => (c:c) => d): (mb: Monad<b>) => (mc: Monad<c>) => Monad<d> {
    return mB => mC => mC.ap(mB.ap(this.map(func)));
    // return mB => mC => mC.ap(this.lift2(func)(mB));
  }
}
const monad: Monad<number> = new Monad(2);
// monad.
// const func = a => [`${a}`];
// const func = a => b => a + b;




// [2].map(func);// [[3]]
// [2].fm(func);// [3]
// import { place } from './minsk/Palac';
// import { members } from './rsConf2018/members';
// import { talks } from './rsConf2018/talks';

// const RSConf = new RSEvent(place, members, talks);
// const members = RSConf.members.map(compose(havefun)(talks))

// class RsConf {
//   constructor(public members, public talks) { }
// }

// const rs = new RsConf;
// rs.

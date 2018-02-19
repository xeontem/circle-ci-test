// export default class Monoid {
//   value: any;

//   constructor(value?: any) {
//     this.value = value === undefined ? [] : [value];
//   }

//   empty() {
//     return new Monoid();
//   }

//   concat(monoid: Monoid) {
//     return this.value.concat();
//   }

// }


export class Monoid<T = string> {
  private value: Array<T>;

  constructor(value?: T | T[]) {
    this.value = value ? Array.isArray(value) ? value : [value] : [];
  }

  static empty<Empty>(): Monoid<Empty> {
    return new Monoid;
  }

  public concat<B>(m: Monoid<B>): Monoid<T | B> {
    return new Monoid([...this.value, ...m.value]);
  }
}

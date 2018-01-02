export default class Monoid {
  private value: any[];

  constructor(value?: any) {
    this.value = value === undefined ? [] : [value];
  }

  private empty() {
    return new Monoid();
  }

  concat(monoid: Monoid): Monoid {
    return new Monoid(this.value.concat(monoid.value))
    // return new Monoid(this.value.concat());
  }

}


const mon1: Monoid = new Monoid(23);
const mon2: Monoid = new Monoid('hello');
const mon3: Monoid = mon1.concat(mon2);

console.log(mon3);

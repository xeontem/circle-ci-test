export default class Monoid {
  value: any;

  constructor(value?: any) {
    this.value = value === undefined ? [] : [value];
  }

  empty() {
    return new Monoid();
  }

  concat(monoid: Monoid) {
    return this.value.concat();
  }

}

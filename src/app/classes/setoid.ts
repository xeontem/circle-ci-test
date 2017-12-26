export class Setoid<T> {

  constructor(private value: T) { }

  equals(setoid: Setoid<T>): boolean {
    return this.value === setoid.value;
  }
}

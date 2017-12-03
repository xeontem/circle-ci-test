export class Setoid<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }

  equals(setoid: Setoid<T>): boolean {
    return this.value === setoid.value;
  }
}

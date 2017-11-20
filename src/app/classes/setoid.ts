export default class Setoid {
  value: any;
  
  constructor(value: any) {
    this.value = value;
  }

  equals(setoid: Setoid): boolean {
    return setoid.constructor === Setoid &&
           setoid.equals &&
           this.value === setoid.value;
  }
}

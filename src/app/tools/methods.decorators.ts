//-------------------- factories -------------------------------------------
/*
options: argument that we can pass before call the method
target: class that current method is
this: intance of the class
key: name of method
descriptor: descriptor of the method
args: arguments that this method recieves
*/
export function Emit(evntName: string) {
  return function(target: {}, key: string, descriptor: PropertyDescriptor) {

    const origMethod = descriptor.value;

    descriptor.value = function<T>(...args: T[]) {
      const result = origMethod.apply(this, args);
      this[evntName].emit(...[...args, result]);
    };

    return descriptor;
  };
}

export function DeferUntill(predicate: any) {
  return function(target: {}, key: string, descriptor: PropertyDescriptor) {

    const origMethod = descriptor.value;

    descriptor.value = function<T>(...args: T[]) {
      console.dir(predicate);
      if (predicate) { return origMethod.apply(this, args); }
    };

    return descriptor;
  };
}
//------------------- single methods ---------------------------------------
/*
target: class that current method is
this: intance of the class
key: name of method
descriptor: descriptor of the method
args: arguments that this method recieves
*/
export function logger(target: {}, key: string, descriptor: PropertyDescriptor) {

  const origMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log('-------------- logger --------------');
    console.log('target: ', target);
    console.log('name: ', key);
    console.log('descriptor: ', descriptor);
    console.log('------------------------------------------');
    origMethod.apply(this, args);
  };

  return descriptor;
}

export function perf(target: {}, key: string, descriptor: PropertyDescriptor) {

    const origMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      console.log(`-------------- performance of ${key} method --------------`);
      const start = performance.now();
      console.log('performance start: ', start.toFixed(10));
      origMethod.apply(this, args);
      const end = performance.now();
      console.log('performance duration: ', (end - start).toFixed(10));
      console.log('performance end: ', end.toFixed(10));
      console.log('------------------------------------------');
    };

    return descriptor;
  }


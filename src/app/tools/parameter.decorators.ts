//-------------------- factories -------------------------------------------
/*
options: argument that we can pass before call the method
target: class that current method is
this: intance of the class
key: name of method
descriptor: descriptor of the method
args: arguments that this method recieves
*/
// export function prop(prop: string, val: any) {
//   return function(target) {
//     target[prop] = val;
//   }
// }
// export function SetId(options: string) {
//   return function(target: {}, key: string, descriptor: PropertyDescriptor) {

//     const origMethod = descriptor.value;

//     descriptor.value = function<T>(...args: T[]) {
//       this[options].emit(...args);
//       origMethod.apply(this, args);
//     }

//     return descriptor;
//   }
// }

//------------------- single methods ---------------------------------------
/*
target: class that current method is
this: intance of the class
methodName: name of method(our function)
ind: index of current parameter
*/
export function logParam(target, methodName, ind) {
  console.log(methodName, ind);
}


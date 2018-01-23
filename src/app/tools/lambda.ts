// Y = λf.(λx.f(xx))(λx.f(xx))

export const If = p => p && I;
export const cond = x => t => f => x ? t : f;
export const condL = x => tF => fF => x ? tF() : fF();
export const swap = arr => i => j => [arr[i], arr[j]] = [arr[j], arr[i]];
export const getType = arr => i => cond(arr[i])(arr[i].type)({});
export const caclcSum = (a:number, b:number):number => a + b;
export const calcMult = (a:number, b:number):number => a * b;
export const getSum = (x:number, y:number):number => calcMult(caclcSum(x, y), caclcSum(x, y));
export const cGetSum = x => y => calcMult(caclcSum(x, y), caclcSum(x, y));
export const randNumber = min => max => ~~(Math.random() * (max - min));

//--------------- comb -------------------------------------
type I = <A>(x: A) => A;
export const I:I = x => x;

type K = <A,B>(x: A) => (y: B) => A;
export const K:K = x => y => x;

// B:: () -> () -> ? -> ?
type B = <A, B, C>(f: (b: B) => C) => ( g: (a: A) => B ) => (x: A) => C;
export const B: B = f => g => x => f(g(x));

type C = <A,B,C>(f: (y: B) => (x: A) => C ) => (x: A) => (y: B) => C;
export const C:C = f => x => y => f(y)(x);

type W = <A,B>(x: (y: A) => (y: A) => B) => (y: A) => B;
export const W:W = x => y => x(y)(y);

// type Y = <A,B>(f: (x: A) => B) => B;
export const Y = F => F(x => Y(F)(x));

type S = <A,B,C>(f: (z: A) => (xz: B) => C) => (x: (z: A) => B) => (z: A) => C;
export const S:S = f => x => z => f(z)(x(z));


export const Ymem = memory => F => F(x => condL(memory.has(x))(y => memory.get(x))(y => memory.set(x, Ymem(memory)(F)(x)).get(x)));

//--------------- NOD elems ---------------------------
export const getClasList = (el: Element) => el.classList;
export const clCont = cl => (cls: string): boolean => cl.contains(cls);

//------------------------- func ------------------
export const nw = f => x => new f(x);

//----------------- obj ----------------------
export const pair = a => b => [a, b];
export const getVal = o => k => o[k];
export const getValRight = k => o => o[k];
export const set = o => k => v => o[k] = v;
export const flipSet = v => k => o => o[k] = v;
//-------------- arrays ----------------------
export const reduce = func => acc => arr => arr.reduce(func, acc);
export const splice = arr => pos => count => arr.splice(pos, count);
export const length = (a: Array<any>): number => a.length;
export const range = (n: number): Array<number> => new Array(n).fill(null).map((v, i) => i);
// arOf:: a -> [a]
export const arOf = Array.of;
// concat:: [a] -> [b] -> [a, b]
export const concat = <T>(a: Array<T>) => (b: Array<T>): Array<T> => a.concat(b);
export const pushI = arr => el => i => arr.push(i);

//----------------- filter ------------------
export const objKeyPredicate = key =>
  (c1, c2) =>
    c1[key] < c2[key] ? -1 :
    c1[key] > c2[key] ? 1 : 0

export const objKeyLengthPredicate = key =>
  (c1, c2) =>
    c1[key].length < c2[key].length ? -1 :
    c1[key].length > c2[key].length ? 1 : 0


//----------------- number ------------------
export const rand = max => ~~(Math.random() * max);
export const fib = n => n === 0 || n === 1 ? 1 : fib(n - 1) + fib(n - 2);
export const fibF = f => n => n === 0 || n === 1 ? 1 : f(n - 1) + f(n - 2);
export const getInt = num => ~~num;
export const getFraction = num => Number(String(num).slice(String(num).indexOf('.') + 1));

//------------------- date --------------------
export const toHalfHour = num => num === 5 ? 30 : 0;

//------------------ document --------------
export const getCookie = () => document.cookie.split('; ').reduce((acc, cookie) => {
  const eq = cookie.indexOf('=');
  acc[cookie.slice(0, eq)] = cookie.slice(eq + 1);
  return acc;
}, {});

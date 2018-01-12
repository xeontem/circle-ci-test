// // const Y = h => (f => f(f))(f => h(n => f(f)(n)));

// // // const Ymem = memory => F => F(x => condL(memory.has(x))(y => memory.get(x))(y => memory.set(x, Ymem(memory)(F)(x)).get(x)));

// // //lazy cond
// // const condL = x => tF => fF => x ? tF() : fF();
// // const Ymem = (mem => h => (f => f(f))(f => h(n =>
// //   condL(mem.has(n))
// //     (z => mem.get(n))
// //     (z => mem.set(n, f(f)(n)).get(n)))))(new Map);
// // const fibF = f => n => n === 0 || n === 1 ? 1 : f(n - 1) + f(n - 2);
// // const fib = Ymem(fibF);
// // console.dir(fib(110)); // 7.049252476708914e+22


// // // var Y = f => (x => f(x(x)))(x => f(x(x)));
// // var Y = h => (f => f(f))(f => h(n => f(f)(n)));
// // var factFactory = g => n => (n < 2) ? 1 : n * g(n - 1);
// // var fact = Y(fact);

// //--------------- first step --------------------
// const fact = n => (n < 2) ? 1 : n * fact(n - 1);

// //--------------- first step --------------------

// // because f returns a function, we have a double function call.
// const fact = (f => n => (n < 2) ? 1 : n * f(f)(n - 1))
//   (f => n => (n < 2) ? 1 : n * fact(n - 1));

// //--------------- thiThe Car class shed its problems at the consumer's expense.brd step --------------------

// const rec = f => f(f);
// const fact = rec(f => n => (n < 2) ? 1 : n * f(f)(n - 1));

// //--------------- fourth step --------------------

// const rec = f => f(f);

// const fact = rec(f => n => {
//   const g = n => f(f)(n);
//   return  (n < 2) ? 1 : n * g(n - 1)
// // });

// //--------------- fifth step --------------------

// const rec = f => f(f);
// const Y = F => rec(f => F(x => f(f)(x)));

// const fact = Y(f => n => n < 2 ? 1 : n * f(n - 1));



// //------------------------





// // var wrap = h => rec(f => {
// //     var g = n => f(f)(n);
// //     return h(g);
// // });



// // const rec = f => f(f);
// // const g = F => n => F(F)(n);
// // const fact = rec(g => n => {
// //   return  (n < 2) ? 1 : n * g(n - 1)
// // });

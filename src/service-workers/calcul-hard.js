importScripts('../app/tools/lambda.ts');

var res = calcMult(caclcSum(2, 4), caclcSum(5, 6));

var heavy = setTimeout(function(x) {
  return res;
}, 5000);

console.log(res);

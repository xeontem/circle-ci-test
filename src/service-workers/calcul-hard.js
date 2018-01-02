importScripts('../app/tools/lambda.ts');

const res = calcMult(caclcSum(2, 4), caclcSum(5, 6));

const heavy = setTimeout(x => res, 5000);

console.log(res);

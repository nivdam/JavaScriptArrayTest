/* Sum an Array in a JavaScript  */
var numberArray = [1, 3, 2, 4];
var sum = 0;
var sum2 = 0;

numberArray.forEach(function (val) {
  // console.log(val + val);
  sum += val;
});

for (var i = 0; i < numberArray.length; i++) {
  sum2 += numberArray[i];
}

// console.log("sum", sum);
// console.log('sum2', sum2);

/* Sum of number divided by 2 */
function sumNumbersByDivided(array) {
  let sum = 0;
  let divided = 2;

  /* for(let i = 0; i < array.length; i++) {
      if (numberArray[i] % divided === 0) {
        sum += numberArray[i];
      }
  } */

  array.forEach(function (val) {
    if (val % divided == 0) {
      sum += val;
    }
  });

  return sum;
}

// console.log(`divided function ${sumNumbersByDivided(numberArray)}`);

/* 
  Changes each member to sum of all the previous members
*/
function sumAllPrevs(array) {
  let sum = 0;

  array.forEach(function (val) {
    sum += val++;
  });

  return sum;
}
// console.log(`sum of all the previous members ${sumAllPrevs(numberArray)}`);

const score = 400;
console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//******MATHS*****/
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // hmesha 0 se 1 ke bich me value degi
// console.log((Math.random()*10) + 1); value 1 se 9 ke bich me 
// console.log(Math.floor(Math.random()*10) + 1); // math.floor mtlb round off krdega points hta dega

//agr value chaihe min or max ke bich me 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 0 case avoid krne ke liye minimum utna chiahe + min for min to max
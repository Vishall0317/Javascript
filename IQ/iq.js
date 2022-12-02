/*

1) == : compare values
2) === : compare values and types

3) NaN property: not a legal nummber

4) scope : 1. global - accessible from anywhere
        2. local/function scope - inside function

*/

let a=1;
let b=1;
let c='1';
console.log(a==b);
console.log(a==c);
console.log(a===b);
console.log(a===c);

console.log(typeof NaN);
console.log(isNaN('7'));
console.log(isNaN(7));
console.log(isNaN(true));
console.log(isNaN("abc"));
console.log(isNaN(undefined));
console.log(isNaN(null));
console.log(isNaN(NaN));
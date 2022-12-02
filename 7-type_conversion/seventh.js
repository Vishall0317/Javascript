/*

two types- implicit(automatic) and explicit(manual)

1. string conversion
2. numeric conversion
3. boolean conversion

*/

let a=12;
let as=String(a);
console.log(a);
console.log(typeof as);
console.log(a.toString());
console.log(String(false));
let value="1234";
let int= Number(value);
console.log(int+4);
console.log(parseInt(value));
console.log(parseFloat(value));

let b=30;
console.log(Boolean(b));

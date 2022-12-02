/*

data types-
1. primitive data types(made at stack)
    a. number = 100, 50, ..........
    b. string = 'john', "vishal", ......
    c. boolean = true, false
    d. null = null
    e. undefined = undefined
    f. symbol
1. reference data types(made at heap)
    a. array = arr[]
    b. object = student
    c. date = 20/02/2022
    d. function = put, get, add, ...

*/

var a=20;
console.log(typeof a);
let b=90.888;
console.log(typeof b);
let name = "vishal";
console.log(typeof name);
let ch = 'abc';
console.log(typeof ch);
let un;
console.log(typeof un);
let um=null;
console.log(typeof um);

let ab=23, bb=23;
console.log(ab==bb);
let x=[23];
console.log(typeof x);
let y=[23];
console.log(x==y);

let d= new Date();
console.log(d);

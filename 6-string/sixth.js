/*

let means literal
string is a object used to represent and manipulates a sequnce of characher.

creating string -
    1. using literal (preffer) ---- let message= 'hello' / let message= "hello";
    2. using String() constructor ---- let message = new String('hello');

five imp operations -
    1. ==, ===, s1.localeCompare(s2)
    2. s.replace("source", "destination")
    3. s.charAt(3);
    4. s.split(" ")
*/

let message= "hello";
console.log(typeof message);

let message1 = new String("hello");
console.log(typeof message1);

let s="i love js";
console.log(s);
console.log(s.length);
let s1=" and java";
console.log(s.concat(s1));
console.log(s.concat(", spring,"+ s1));
console.log(s.charAt(2));
console.log(s.indexOf("js"));
console.log(s.substring(2,6));

console.log(s.replace("love", "hate"));
console.log(s.split(" "));
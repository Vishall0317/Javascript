/*

types of loops -
 1. for
 2. while
 3. do-while
 4. for-in
 5. for-of (introduce in ES6)

*/

console.log("for loop");
for(let i=1;i<=5;i++){
    console.log(i);
}



console.log("while loop");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}



console.log("do-while loop");
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);



console.log("for-in loop");
let student= {
    name :"vishal",
    city :"nagpur",
    phone:"9898980976"
};
for(let k in student){
    console.log(k +" = "+ student[k]);
}



console.log("for-of loop");
let arr=[1, 3, 5, 6];
for(let k of arr){
    console.log(k);
}
for(let k in arr){
    console.log(k);
}

/*

types of variable - 
1. let - if we use this under loop/if-else then it will limitted in that only.
2. var - this is limitted out of the loop/if-else also and var can be use first and then decalre 
3. const - constant throughout the program

naming conventions -
1. start with alphadet, but it can not start from digit.
2. name must contain only lettrs, numbers, $ and _ 
3. key words can not be used as variable name
4. case sensitive

*/


let message="hey, how are you";
console.log(message);

const message1="hey, who are you";
console.log(message1);
//message1=message;
//console.log(message1); //this message1 not print on console it will show error

var x=3;
while(x>0){
    console.log(x);
    x--;
}



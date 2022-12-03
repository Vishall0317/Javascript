// ES6 Features- ECMAScript 2015, also know as ES6.

// 1. es6 introduced javascript classes.
class Student {
    constructor(name, phone){
        this.name=name;
        this.phone=phone;
    }

    showDetails(){
        console.log("name: "+this.name);
        console.log("phone: "+this.phone);
    }

    getName(){
        return this.name.toUpperCase();
    }
}
let s1=new Student("vishal", "9090898978");
s1.showDetails();
console.log(s1.getName());

// 2. introduced let, const

// 3. arrow functions - limitations(this, super and new keywords not present)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//traditional way
function square(x){
    return x*x;
}

//arrow function
const square1 = (x)=> x*x;
console.log(square(3));
console.log(square1(3));

//4. multi line string
let address = `
at-shioni, 
tah-amgaon, 
di-gondia,
state-maharashtra
`

let dynamicHtml=`
<form>
    <input type="text" name="name/>
    <button>ok</button>
</form>
`
console.log(dynamicHtml);

//5. default parameter
const sum =(x,y)=>x+y;
console.log("sum: "+sum(2,4));
console.log("sum: "+sum());

const sum1 =(x=1,y=2)=>x+y;
console.log("sum: "+sum1(2,4));
console.log("sum: "+sum1());

//6. Template Literals
let x=12, y=30;
let str = `value of x is ${x} and y is ${y}`;
console.log(str);

//7. Destructuring Assignments
let arr=[10, 20];
let [a, b]=arr;
console.log("a= "+a+" b= "+b);

let ob={
    language:"javascript",
    dbName:"MongoDB"
};
let {language, dbName}=ob;
console.log("language= "+language+" dbName= "+dbName);

let arr1=[10, 20, 30, 400, 45, 2000];
let [m, n, ...rest]=arr1;
console.log("m= "+m+" n= "+n+" rest: "+rest);

//8. Enhance object literals
//traditinal way
let student = {
    name: "vishal",
    lastName: "bramhankar"
};
console.log(student);

//Enhance object 
let name="vishal", lastName="bramhankar";
let toggle="status";
let student1={
    name,
    lastName,
    [toggle]: true
};
console.log(student1);

function createObject(a, b, c){
    return {a, b, c};
}
console.log(createObject(10, 20, 30));

//9. promise in JS
let p = new Promise((resolve, reject)=> {
    //server call - asynchronous work
    let flag=true;
    setTimeout(()=>{
        if(flag){
            resolve();
        }else{
            reject();
        }
    }, 4000);
})

p.then(()=>{
    console.log("prmise id resolved.");
}).catch(()=>{
    console.log("promise is rejected.");
});
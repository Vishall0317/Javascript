//area of circle
const areaOfCircle=(r)=>{
    //return Math.PI*r*r;
    return Math.PI*Math.pow(r,2);
}
console.log("Area of circle: "+areaOfCircle(5));

console.log(Math.abs(-123));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*100);
let random = Math.random()*1000;
console.log(random);
console.log(Math.trunc(random));

//square root
console.log(Math.sqrt(4));

//ceil and floor
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2));
console.log(Math.floor(3.2));

//sin, cos, tan
console.log("sin(30) : "+Math.sin(30*(Math.PI/180)));

//min, max
console.log("min value : "+Math.min(30, 20, 40, 60));
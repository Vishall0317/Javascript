let arr=[12, 13, 45, 67, 34];
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(arr[9]);
console.log(arr.length);

let sum=0
arr.forEach(function(value, index){
    sum=sum+value;
})
console.log("sum is "+sum);

let names= new Array("vishal", "tina");
names.push("rakesh");  // add at last
names.push("raaja");
names.unshift("raani");  //add at first
console.log(names);
console.log(names.length);
names.pop();   //delete from last
console.log(names);
names.shift();   //delete from first
console.log(names)

names.forEach(function(value, index){
    console.log(index +" = "+ value);
})



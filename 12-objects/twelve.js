/*

1. JS is an object-oriented language.
2. JS object is just a collection of key value pairs.
3. creating object?
    - { properties }
    - {
        name :"vishal",
        phone : "9878980098",
        city : "amgaon"
      }
    - object can also have functions inside 
        {
         name :"vishal",
         phone : "9878980098",
         city : "amgaon"
         display : function(){
            console.log(this.name);
         }
        }

*/

let ob ={
    name: "vishal",
    lastName:"bramhankar",
    age:25,
    city:"amgaon",
    phone:"9089009878",
    "programming skills":"c++, java, js",
    display:function(){
        console.log("display properties");
        console.log(this.name);
        console.log(this.lastName);
        console.log(this.age);
    }
};

console.log(ob);
console.log(typeof ob);

console.log(ob.name);
console.log(ob["name"]);

ob.display();
ob["display"]();

console.log("all keys present in ob");
for(let key in ob){
    console.log(key);
}

console.log("---------------");
//update/delete/insert values in object
ob.name="raaja";
console.log(ob.name);

ob.email="raaja@email.com";
console.log(ob.email);

delete ob.city;
console.log(ob);
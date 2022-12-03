let student = {
    name: "vishal",
    lastName: "bramhankar",
    age: 25,
    city: "amgaon",
    phone: "9089009878",

    get getPhone() {
        return this.phone;
    },
    set setPhone(value) {
        this.phone = value;
    },

    get getLastName() {
        return this.lastName;
    },
   
    set setLastName(value) {
        this.lastName = value;
    },
    set setAge(value){
        this.age=value;
    },

    display: function () {
        return this.name +" : "+ this.lastName +" : "+this.age;
    },
};


function Student(name, phone, age){
    this.name=name;
    this.phone=phone;
    this.age=age;

    this.display= function(){
        return this.name +" : "+ this.phone +" : "+this.age;
    };
}

student.setLastName = "nayak";
console.log(student.getLastName);
console.log(student.display());

let s1=new Student("vishal", "8090909890", "22");
console.log(s1.display());

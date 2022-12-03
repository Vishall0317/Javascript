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
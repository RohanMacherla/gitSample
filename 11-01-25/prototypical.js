let Person1={
    firstname:"rohan",
    lastname:"macherla"
};

let Person2={
    age:20
};
console.log(Person2.firstname);
Person2.__proto__=Person1;
console.log(Person2.firstname);

Object.setPrototypeOf(Person2,Person1);
console.log(Person2.firstname);
console.log(Person2.lastname);
console.log(Person2.age);

//Prototypical inheritace on functions
function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
function Admin(fname,lname){
    Person.call(this,fname,lname);
}

Admin.prototype=Person.prototype;

let a1=new Admin("CVR","A");
console.log(a1);

//Inheriting properties from one method to other
let student={
    talk:true
    };

let developer={
    codes:true,
    canCook(){
        return "Sorry i can only write code";
    },
    __proto__:student,
};

console.log("Can developer talk :"+developer.talk);
console.log("Can developer code :"+developer.codes);
console.log("Can developer cook :"+developer.canCook());




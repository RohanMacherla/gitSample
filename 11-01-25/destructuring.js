const names = ["dhruva","Rohan","sanjay","rishi"];
let [name1,name2,...name] = names;
console.log(name1)
console.log(name)
console.log(name2)
//Object Destructuring
const pdetails ={
    fname: "Rohan",
    lname: "Macherla",
    age: 20
};
let{fname,lname}=pdetails;
console.log(fname);
console.log(lname);
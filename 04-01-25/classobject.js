function rectangle(height,width)
{
    this.height=height;
    this.width=width;
} 
let m=new rectangle(12,30);
console.log(m);
class rectangle1 {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
     

    ..
}
let r=new rectangle1(20,30);
console.log(r);

let s={
    height:'20',
    width:'30'
};
console.log(s);
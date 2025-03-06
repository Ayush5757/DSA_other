// console.log("prototype....");
// let array = [1, 2, 3, 4];
// console.log(array);
// console.log(array.__proto__);
// console.log(Object.getPrototypeOf(array));
// console.log(Array.prototype);

// console.log("---------------");

// console.log(array.__proto__);
// console.log(array.__proto__.__proto__);
// console.log(array.__proto__.__proto__.__proto__);
// console.log("---------------");
// console.log(Object.prototype);
// console.log(Object);

// console.log("---------------");
// console.log(Function.__proto__.__proto__);

// console.log("------------------------------- module imports");
// import { myName } from "./modulesFile.js";

// console.log(myName("Mannu"));

// console.log("----------------------");

// let P1 = {
//   name: "mishra",
//   age: 26,
// };

// // let P2  = P1
// let P2 = Object.create(P1);
// let P3 = Object.create(P2);
// console.log(P1);
// console.log(P2);
// console.log(P3);

// let pr1 = { name: "mishra", age: 26 };
// let pr2 = {}
// pr2.__proto__ = pr1
// console.log(pr1);
// console.log(pr2);
// console.log(pr2.age);



function fun(name){
    this.userName = name
    console.log('This is Funtion');   
}
function runbro(){
    console.log('running '+ this.userName);
}
console.dir(fun);
fun.prototype.run = runbro
console.dir(fun);
let b = new fun()
console.dir(b);
let c = new fun()
console.log(c);

console.log('--------------------');

console.log('-----------&&&----------');   
function Cartoon(name){
    this.userName = name
    this.chanelName = 'CN'
    console.log('This is Funtion');   
}

function BobBuilder() {
    console.log(this.userName + " ...is Crazy");
}

let Tom = new Cartoon('Tom and Jerry') 
let Bob = BobBuilder.bind(Tom)  // .bind(Tom) mtlb Tom ka this bind ho gya left function ke sath
Bob()




const obj = {
    userProfile: "Asha",
    show: function() {
        console.log('=============');  
        console.log(this.userProfile);  
    }
};
obj.show(); 
console.log('=============');  

function Shoes(){
    this.Cooler = 'Large'
    console.log('Good Boy Baby');
}
console.log(new Shoes());


function firstFunction(){
    this.counts = 10
}

function printCount(){
    console.log(this.counts);
}
let count = new firstFunction()
printCount.apply(count)
let binding = printCount.bind(count)
binding()




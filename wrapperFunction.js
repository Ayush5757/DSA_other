console.log('wraper apply, call, bind');

const obj1 = {
    firstName: 'Asha',
    lastName: 'Mishra',
    fullName(age){
        console.log(`${this.firstName} ${this.lastName}, age = ${age}`);
    }
}
const obj2 = {
    firstName: 'Akki',
    lastName: 'Gupta',
}

obj1.fullName.call(obj2)
obj1.fullName.call(obj2,26) // funtion argupents (obj2,26,'hello',69)
obj1.fullName.apply(obj2,[26]) // same but in array convert to argument
console.log('--- '+obj1.fullName.apply(obj2,[26]));

let instance = obj1.fullName.bind(obj2)
console.log(obj1.fullName.bind(obj2));
instance(25)

console.log('------------------');

function yourName(){
    console.log(this.name+' '+this.surName);
}

let obj3 = {
    name: 'Komal',
    surName: 'Tripathi'
}

yourName.call(obj3)
yourName.apply(obj3)




console.log('curring...');


function one(num1){
    return function (contitionl){
        return function(num2){
            let data = contitionl(num1,num2)
           return function (expected){
                console.log(`Expected Result = ${expected==data}`);
                return data
           }
        }
    }
}
// curring
console.log(one(80)((a,b)=>a+b)(15)(95))
console.log(2**4);

console.log({}=={});

let b = new Number(10)
console.log(b);

console.log(+true);
console.log(!'test');


var a = {}
var c = {key:'c'}
var d = {key:'d'}
a[c] = 600
c[d] = 700
console.log(a);
console.log(c);
console.log(d);

console.log(a[d]);
console.log(a[c]);
console.log(c[c]);
console.log(c[d]);

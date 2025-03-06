console.log("recursion");
function wrap() {
  let number = 1;
  return function resurcive() {
    if (number > 10) {
      return;
    }
    console.log(number);
    number++;
    resurcive();
  };
}
let w = wrap();
// w();
// ---------------------------------
function multiply(num,val = 1,total = 0){
    if(val>10){
        return `total = ${total}`
    }
    console.log(num*val);
    total = (num*val) + total
    return multiply(num,++val,total)
}

console.log(multiply(2))
// ----------------------
console.log('-----------------------------');
// let fibnachinumber = [0,1,1,2,3,5,8,13,21,34]

function fib(num){
    if(num<=0){
        return 0
    }else if(num===1){
        return 1
    }

    return fib(num-1) + fib(num-2)
}
console.log(fib(4));
// ------------------------------------------
console.log('--------------------------');



let obj = {
    userName: 'asha mishra',
    age: 48
}
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
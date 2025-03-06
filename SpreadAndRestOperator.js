console.log('spread and rest operator');


function calculate(num1,num2){
    let total = num1+num2
    console.log(total);
}
calculate(5,26,10)

function calculate1(num1,...rest){
    console.log(rest);
    let total = rest.reduce((acc,curr)=>{
        acc = acc + curr
        return acc
    },0)
    console.log(num1+total);
}
calculate1(15,15,15,15,15,15)
// ------------------
let arr = [20,15,15,15,15,15]
function calculate2(num1,...rest){
    console.log(rest);
    let total = rest.reduce((acc,curr)=>{
        acc = acc + curr
        return acc
    },0)
    console.log(num1+total);
}
calculate2(...arr)
console.log('DSA');
 
function sumNaturalNumbers(number){
    let sum = 0
    for(let i=1; i<=number; i++){
        sum += i
    }
    return sum
}

console.log(sumNaturalNumbers(15))


let array = ['suman','adity','karan','shreya','lara']

function findStudent(studenstArray,studentName){
    // return studenstArray.includes(studentName)
    return studenstArray.some((name)=> name.includes(studentName))
}

console.log(findStudent(array,'ara'))
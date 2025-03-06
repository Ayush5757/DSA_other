// different work learning about object, this, prototype connection
class mycp{
    getNumber(){
        console.log(this.looping);
    }
}


let obj = new mycp()
obj.__proto__.looping = 'i am Looping'
obj.getNumber()
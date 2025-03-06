// console.log("GetSet...");
// class User {
//   constructor(first_Name,last_Name) {
//     this.firstName = first_Name;
//     this.lastName = last_Name
//   }
//   set fullName(val){
//     console.log('set called..');
//     let [firstname,lastname] = val.split(' ')
//     this.firstName = firstname
//     // this.lastName = lastname
//   }
//   get fullName(){
//     console.log('get called');
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const user1 = new User('Mannu','Mishra')
// console.log(user1.fullName)
// console.log('----')
// user1.fullName ='Asha Tripathi'
// console.log(user1.fullName)
// // console.log(user1.lastName)


// with setter getter
// class User {
//   constructor(first_Name) {
//     this.firstName = first_Name;
//   }
//    set first_Name(val){
//     console.log('set called..');
//     this.firstName = val
//   }
//    get first_Name(){
//     return `${this.firstName}`
//   }
// }




// without setter getter
// class User {
//   constructor(first_Name) {
//     this.firstName = first_Name;
//   }
//    set_first_Name(val){
//     console.log('set called..');
//     this.firstName = val
//   }
//    first_Name(){
//     return `${this.firstName}`
//   }
// }



// const user1 = new User('Mannu')
// console.log(user1.first_Name())
// user1.set_first_Name('Great Man')
// console.log(user1.first_Name())
// console.log(user1.first_Name())




class User {
  #firstName
  constructor(first_Name) {
    this.#firstName = first_Name;
  }
   set first_Name(val){
    this.#firstName = val
  }
   get first_Name(){
    return `${this.#firstName}`
  }
}

const user1 = new User('Mannu')
console.log(user1.first_Name)
user1.first_Name = 'Great Man'
console.log(user1.first_Name)
// console.log(user1.#firstName)   // error giving
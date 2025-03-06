console.log("polyfill");
//  polyfills mtlb purane browser ke leye moder code   bnana take woh bhi use kr payi
// polyfill for forEach
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.dir(arr);
// console.dir(Array);
Array.prototype.myForEach = function (callbackfn) {
  console.dir(this);
  for (let i = 0; i < this.length; i++) {
    callbackfn(this[i], i);
  }
};
// console.dir(arr);
arr.myForEach((v, i) => {
  console.log(i + " index val = " + v);
});
// pollyfill for Map
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myMapFunc = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    let returncall = callback(this[i]);
    array.push(returncall);
  }
  return array;
};
let a = arr2.myMapFunc((val) => val ** 3);
console.log(a);
// ----------------
// filter function
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.myFilterFunc = function (callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    let returncall = callback(this[i]);
    if (returncall) {
      array.push(this[i]);
    }
  }
  return array;
};
let a1 = arr3.myFilterFunc((val) => val > 3);
console.log("filtered array = ", a1);
// -----------------------

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let t = arr4.reduce((acc, current) => current + acc);
console.log("reducer = ", t);

Array.prototype.myReducerFunc = function (callback, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i]) : this[i];
  }
  return acc;
};

let a2 = arr3.myReducerFunc((acc, curren) => curren + acc);
console.log("myReducerFunc array = ", a2);

// -------------------------------
// call
console.log("--------------------");

let e = {
  userName: "Asha Mishra",
  age: 25,
};
let f = {
  userName: "Aneek Mishra",
  age: 21,
};
function profile(arg, arg2) {
  console.log("" + arg + " - " + arg2);
  console.log(`This is ${this.userName} - ${this.age}`);
}
// profile.call(f)
// call method
Function.prototype.myCall = function (obj, ...arg) {
  obj.caller = this; // better approch
  obj.caller(...arg);
};
// apply method
Function.prototype.myApply = function (obj, arg) {
  obj.caller = this;
  obj.caller(...arg);
};
Function.prototype.myBind = function (obj) {
  obj.caller = this;
  return function (arg) {
    obj.caller(...arg);
  };
};

profile.myCall(e, "Hii Man", "How are you");
profile.myApply(f, ["Hii Man", "How are You"]);
let bin = profile.myBind(e);
bin(["Hii Man", "How are You"]);

console.log("*******************");

// console.log(k.toUpperCase());

String.prototype.mytoUpperCase = function () {
  let temp = {
    a: "A",
    y: "Y",
    u: "U",
    s: "S",
    h: "H",
    m: "M",
    i: "I",
    r: "R",
    A: "A",
    Y: "Y",
    U: "U",
    S: "S",
    H: "H",
    M: "M",
    I: "I",
    R: "R",
  };
  let newVal = [];
  for (const key in this) {
    if (this[key] !== " ") {
      newVal.push(temp[this[key]]);
    } else {
      newVal.push(" ");
    }
  }
  return newVal.join("");
};

let k = "Ayush Mishra";
let temp = k.mytoUpperCase();
console.log(temp);

// -----------------------------------------
console.log("---------------------------");

let arrt = [1, 2, [[1, 2, 3]]];
// console.log(arrt.flat(2));

Array.prototype.myflat = function () {
  let array = [];
  this.forEach((val) => {
    if (Array.isArray(val)) {
      array.push(...val.myflat());
    } else {
      array.push(val);
    }
  });
  return array;
};
let arrt2 = [1, 2, [[1, [2, 3, 7, [9]]]]];
console.log(arrt2.myflat());
// let fullarr = []
// Array.prototype.myflat = function () {
//     this.forEach((val) => {
//       if (Array.isArray(val)) {
//         val.myflat()
//       } else {
//         fullarr.push(val);
//       }
//     });
//   };

// let arrt2 = [1, 2, [[1, [2, 3, 7,[9]]]]];
// arrt2.myflat();
// console.log(fullarr);

// ------------------------
// Deep Copy
console.log("=============================");

Array.prototype.myDeepCopy = function () {
  let temparray = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      temparray.push(this[i].myDeepCopy());
    } else {
      temparray.push(this[i]);
    }
  }
  return temparray;
};

let orignalArray = [1, 2, 3, [4, 5, [5, [6, 9]]]];
let deepCopy = orignalArray.myDeepCopy();
// let deepCopy = [...orignalArray];

console.dir(deepCopy);

deepCopy[3].push(6);

console.dir(orignalArray);

console.log("-----------------------------------");

// let global = 0;
// function call(x){
//     if(!x){
//     return global
//     }
//     global += x
//     return call
// }
function call1(x) {
  let global = x;
  return function callt (y) {
    if (!y) {
      return global;
    }
    global += y;
    return callt;
  };
}

function call2(x) {
    let global = x;
    return function (y) {
      if (!y) {
        return global;
      }
      global += y;
      return call2(global);
    };
  }

//   call1 is better then call2
console.log(call1(2)(2)(10)());  
console.log(call2(2)(2)(10)());

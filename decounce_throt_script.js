let input = document.querySelector(".input_field");

// debouncing
export function debounce(callbackFunction) {
  let timeOutID = null;
  return function handelChange(e) {
    clearTimeout(timeOutID);
    timeOutID = setTimeout(() => {
      callbackFunction(e.target.value);
    }, 2000);
  };
}
export const handelInput = debounce((val) => {
  console.log(val);
});
input.addEventListener("input", handelInput);

//  throtling
let input2 = document.querySelector(".throtinput");

function throtling(cb) {
  let throtal = false;
  return function (e) {
    if (!throtal) {
      cb(e);
      throtal = true;
      setTimeout(() => {
        throtal = false;
      }, 2000);
    }
  };
}
let handelthrot = throtling((e) => {
  console.log(e.target.value);
});

// let throtglobal = false;
// function throtlingDirect(e) {
//   if (!throtglobal) {
//     console.log(e.target.value);
//     throtglobal = true;
//     setTimeout(() => {
//       throtglobal = false;
//     }, 2000);
//   }
// }

input2.addEventListener("input", handelthrot);

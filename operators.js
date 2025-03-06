const array = [
  {
    name: "ayush",
  },
  {
    name: "Rajan",
  },
  {
    name: "Komal",
  },
];

console.log(array[1].name);
console.log(array[1].name.age);     // same work
console.log(array[1].name?.age);    // same work
// console.log(array[1].name.age.currentAge); /// error
console.log(array[1].name.age?.currentAge); /// works

console.log(array.light?.kg);
console.log([]+ +'1');

console.log('------------------------------');

console.log(false ?? null); 
console.log(undefined ?? 22);  // ?? -> Only undefine and null is fallse value
console.log((undefined || undefined )??('Raj' && 'mannu')); 
                // undefine ?? mannu = mannu
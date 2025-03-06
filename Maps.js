console.log("Map-Set");

const set = new Set([10, 22, 5, 7, 10, 65, 48,{laf:'ayush'},{user:'asha'}]);
console.log(set);
set.add("Mishra");
console.log(set);

set.delete(10);
set.delete(5);
set.delete(40);
console.log(set);
let data = set
console.log(set.size);
set.add({ name: "anil" });
console.log(set);

console.log('data ',data);
console.log('data ',[...data]);
console.log('has ',set.has(7));
console.log("---------------------------");

let map = new Map([['familyName','Mannu']]);
map.set('username' ,'ayush')
map.set('username1' ,'ayush1')
map.set('userSurname' ,'Mishra')
map.set('age' ,26)
console.log(map);
map.delete('username1')
console.log(map);
let obj = { familyName: 'Mannu' };
let map1 = new Map(Object.entries(obj));

console.log(map1);

let kt = {
    userName: 'Meenal'
}

console.log(Object.entries(kt));


const setview = new Set([10,11,12,13,14,15,16,{'laf':'ayush'},{'user':'asha'}]);
console.log('setview - ',setview.has({'user':'asha'}));
let a = {'laf':'ayush'} // because object checked by their reference 
const setview2 = new Set([10,11,12,13,14,15,1,a,{'user':'asha'}]);
console.log('setview2 - ',setview2.has(a));


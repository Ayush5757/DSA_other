console.log('looping...');

const userName = 'Mannu Mishra'
const user2Name = {
    name: 'Asha Mishra'
}
//for-of works with directValues Like Array Map etc
for (const element of userName) {
    console.log(element);
}
// for-in works With Object to get key of it
for (const element in user2Name) {
    console.log(user2Name[element]);
}


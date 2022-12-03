// var x;
// x = 10; //x1: 10
// console.log(x);


// x = 15; // x1: 15
// console.log(x);


// //  x1: allocates some memory at this location 

// const user = {
//     name: 'Awais',
//     age: 30,
    
// } // x2

// const anotherUser = JSON.parse(JSON.stringify(user)); // x3

// user.name = 'Osama';
// anotherUser.age = 40;

// console.log(user); // Osama 30
// console.log(anotherUser); // Awais 40



const userInfo = {
    firstName: 'Awais',
    lastName: 'Ashraf',
    age: 30,
    married: true,
    children: 2,
    occupation: 'Programmer'
}

// de structur ing

// const firstName = userInfo.firstName;
// const lastName = userInfo.lastName;
// const remainingInformation = {
//     age: userInfo.age,
//     married: userInfo.married,
//     children: userInfo.children,
//     occupation: userInfo.occupation
// }


const { firstName, lastName, ...rest } = userInfo;

console.log(rest)
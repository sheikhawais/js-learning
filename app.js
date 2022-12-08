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



// const userInfo = {
//     firstName: 'Awais',
//     lastName: 'Ashraf',
//     age: 30,
//     married: true,
//     children: 2,
//     occupation: 'Programmer'
// }

// de structur ing

// const firstName = userInfo.firstName;
// const lastName = userInfo.lastName;
// const remainingInformation = {
//     age: userInfo.age,
//     married: userInfo.married,
//     children: userInfo.children,
//     occupation: userInfo.occupation
// }


// const { firstName, lastName, ...rest } = userInfo;

// promises and callbacks

// what is async?

// $.ajax({
//     url: "https://restcountries.com/v3.1/name/pakistan", 
//     success: function(result){
//         console.log(result)
//         console.log('second-call')
//     },
//     error: function () {
//         console.log(error);
//     }
// });
// let loader = true;
// $.ajax({
//     url: "https://restcountries.com/v3.1/all", 
//     success: function(result){
//         console.log(result);
//         console.log('first-call');
//         loader = false;
//     },
//     error: function () {
//         console.log(error);
//         loader = false;
//     }
// });

/**
 * Problem with callbacks 
 * callback hell -> this means the code is not managable in a good way
 * you cannot call multiple APIs in parallel, even if you do, you don't know which one is going to be completed first
 * 
 */

/**
 * Good things about promises
 * There is no callback hell, the code is very manageable 
 * parallel calls can be made and you can trigger functions when all of them are executed (This is not the case with callbacks)
 * Allows you more functions (like finally :) ) 
 */

let countriesList = []
const getCountries = () => {
    let anotherLoader = false;
    fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
    .then(res => {
        countriesList = res;
        showCountries(countriesList);
    }).catch( error => {
        throw error;
    }).finally( () => {
        anotherLoader = false;
    })
}


const showCountries = list => {
    const tableBody = document.getElementById('country-list-body');
    let countriesListRow = '';
    tableBody.innerHTML = '';
    list.forEach(country => {
        // countriesList += '<tr>'+
        //                     '<td>' + country.name.official + '</td>'+
        //                     '<td>' + (country.independent ? 'Yes' : 'No') + '</td>'+
        //                     '<td>' + country.capital + '</td>'+
        //                   '</tr>';
        countriesListRow += `<tr>
                            <td>${country.name.official}</td>
                            <td>${country.independent ? 'Yes' : 'No'}</td>
                            <td>${country.capital}</td>
                            <td>${country.region}</td>
                        </tr>`;
    });
    
    tableBody.innerHTML = countriesListRow;
}




function onNameFilterChange(event) {
    const searchString = event.srcElement.value.toLowerCase();
    if ( searchString ) {
        const countries = countriesList.slice();
        let filteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(searchString));
        showCountries(filteredCountries);
    } else {
        showCountries(countriesList);
    }
}

function onRegionFilterChange(event) {
    const searchString = event.srcElement.value.toLowerCase();
    if ( searchString ) {
        const countries = countriesList.slice();
        let filteredCountries = countries.filter(country => country.region.toLowerCase().includes(searchString));
        showCountries(filteredCountries);
    } else {
        showCountries(countriesList);
    }
}

const addEvents = () => {
    const nameField = document.getElementById('country-name');
    const regionField = document.getElementById('region');
    nameField.addEventListener('change', onNameFilterChange);
    regionField.addEventListener('change', onRegionFilterChange);
}

addEvents();
getCountries();

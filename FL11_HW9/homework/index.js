//.0 Write function, which returns array of numbers from string parameter.
function getNumbers(stringArray) {
    let array = [];
    for (let i = 0; i < stringArray.length; i++) {
        //if ( !isNaN(stringArray[i])) {}
        if (stringArray[i] >= 0 || stringArray[i] <= 0) {
            array.push(parseInt(stringArray[i]));
        }
    }
    return array;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

//1. Write a function that could receive different amount of parameters (n1, n2, ...n) 
function findTypes() {
    const dataTypes = {};
    let type;
    for (let i = 0; i < arguments.length; i++) {
        type = typeof arguments[i];
        console.log(type);
        if (dataTypes.hasOwnProperty(type)) {
            dataTypes[type] = dataTypes[type] + 1;
        } else {
            dataTypes[type] = 1;
        }
    }
    return dataTypes;
}
console.log(findTypes('number'));
//console.log(findTypes(null, 5, 'hello'));

// 2. Write function, which iterates over array and executes function on each element.
function executeForEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
    return array;
}
// executeForEach([1, 2, 3], function(el) {
//     console.log(el);
// });

let arrayForEach = [];
arrayForEach.length = 4;
for (let i = 0; i < arrayForEach.length; i++) {
    arrayForEach[i] = i + 1;
}
executeForEach(arrayForEach, function(el) {
    console.log(el);
});

//3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
function mapArray(array, func) {
    let arr = [];
    executeForEach(array, function(el) {
        arr.push(func(el));
    });
    return arr;
}
console.log(mapArray(arrayForEach, function(el) {
    let number = 3;
    return el + number;
}));
// console.log(mapArray([2, 5, 8], function(el) {
//     return el + 3;
// }));

//4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
function filterArray(array, func) {
    let filtered = [];
    executeForEach(array, function(el) {
        if (func(el)) {
            filtered.push(el);
        }
    })
    return filtered;
}
console.log(filterArray(arrayForEach, function(el) {
    let number = 3;
    return el > number;
}));
// console.log(filterArray([2, 5, 8], function(el) {
//     return el > 3;
// }));

//5. Write function, which returns formatted date.
function showFormattedDate(date) {
    let options = { month: 'short', day: 'numeric' };
    let tDate = date.toLocaleDateString('en-us', options);
    return 'Date: ' + tDate + ' ' + date.getFullYear();
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.
function canConvertToDate(date) {
    let validDate = new Date(date);
    return !isNaN(validDate);
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

//7. Write function, which returns difference between two dates in days
function daysBetween(dateOne, dateTwo) {
    let hoursPerDay = 24,
        minutesPerHour = 60,
        secondsPerMinute = 60,
        milisecondsPerSecond = 1000,
        day = hoursPerDay * minutesPerHour * secondsPerMinute * milisecondsPerSecond;
    let d1 = new Date(dateOne);
    let d2 = new Date(dateTwo);
    return Math.round(Math.abs((d1 - d2) / day));
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

const data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
]

//8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7
function getAmountOfAdultPeople(data) {
    let age = 18,
        days = 365,
        adults = age * days;
    let array = filterArray(data, function(el) {
        if (daysBetween(new Date(el.birthday), new Date()) > adults) {
            return daysBetween(new Date(el.birthday), new Date());
        }
    });
    return array.length;
}
console.log(getAmountOfAdultPeople(data));

//9. Write function, which returns array of keys of an object.
function keys(object) {
    let keys = [];
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            keys.push(property);
        }
    }
    return keys;
}
console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

//10. Write function, which returns array of values of an object.
function values(object) {
    let values = [];
    for (let value in object) {
        if (object.hasOwnProperty(value)) {
            values.push(object[value]);
        }
    }
    return values;
}
console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
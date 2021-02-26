
// let passengers = titanicStr.split('\n');

// for (i = 0; i<passengers.length; i++) {
//     passengers[i] = passengers[i].split(',')
// }

function splitString (string, select1, select2) {
    let arr = string.split(select1)
    for (i = 0; i<arr.length; i++) {
        arr[i] = arr[i].split(select2)
    }
    return arr
}


//console.log(passengers)

console.log(splitString(titanicStr, '\n', ','))

class Passenger {
    constructor (survive, pclass, name, sex, age, siblingsSpouses, parentChildren, fare) {
        this.survived = survive;
        this.pclass = pclass;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.siblingsSpouse = siblingsSpouses;
        this.parentChildren = parentChildren;
        this.fare = fare
    }
}

let allPassengers = splitString(titanicStr, '\n', ',')


function createObjects(arr){
    let output = []
    for (i=0; i<arr.length; i++){
        output.push(new Passenger(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7] ))
    }
    return output
}

console.log(createObjects(allPassengers))

let passengerObjects = createObjects(allPassengers)

let str = "Mr. James Bond Senior"

class nameObject {
    constructor (title, firstName, lastName) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Split the name property value into an array.


//Take the string at index 0 and assign it to the title property of the name object.


//Take the string at index 1 and assign it to the first name property of the name object.

//The rest of the array indices, use a method to combine them into a string. Put the result into the last name property of the name object.

function nameSplit(arrOfObj) {
    for(i=0; i<arrOfObj.length; i++){
        let tempArray = arrOfObj[i].name.split(' ')
        let handle = tempArray.shift()
        let fName = tempArray.shift()
        let lName = tempArray.join(' ')
        arrOfObj[i].name = new nameObject(handle, fName, lName)
    }

    return arrOfObj
}

console.log(nameSplit(passengerObjects))

// console.log(str.substr(0, str.indexOf(' ')))
// console.log(str.substr(str.indexOf(' ')+1, str.indexOf(' ')))
// console.log(str.substr(str.indexOf(' ')+1))

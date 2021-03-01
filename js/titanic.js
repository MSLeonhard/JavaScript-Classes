
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

// console.log(splitString(titanicStr, '\n', ','))

class Passenger {
    constructor (survive, pclass, name, sex, age, siblingsSpouses, parentChildren, fare) {
        this.survived = survive;
        this.pclass = pclass;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.siblingsSpouses = siblingsSpouses;
        this.parentChildren = parentChildren;
        this.fare = fare
        }
        didSurvive(){
            if (this.survived == 1) {
                return 'Yes'
            } else {
                return 'No'
            }
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

// createObjects(allPassengers)

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

nameSplit(passengerObjects)

document.createElement
//for {
    //create row
    //insert data in the proper order
        //name (combined)
        //sex
        //age
        //if they survived
        //class
        //siblings/spouses
        //parents/children
        //fare
//}

for (i = 0; i<passengerObjects.length; i++) {
    let table = document.querySelector('table')
    let row = document.createElement('tr')
    let data1 = document.createElement('td')
    let data2 = document.createElement('td')
    let data3 = document.createElement('td')
    let data4 = document.createElement('td')
    let data5 = document.createElement('td')
    let data6 = document.createElement('td')
    let data7 = document.createElement('td')
    let data8 = document.createElement('td')
    table.appendChild(row)
    row.appendChild(data1)
    row.appendChild(data2)
    row.appendChild(data3)
    row.appendChild(data4)
    row.appendChild(data5)
    row.appendChild(data6)
    row.appendChild(data7)
    row.appendChild(data8)
    data1.textContent = `${passengerObjects[i].name.title} ${passengerObjects[i].name.firstName} ${passengerObjects[i].name.lastName}`
    data2.textContent = passengerObjects[i].sex
    data3.textContent = passengerObjects[i].age
    data4.textContent = passengerObjects[i].didSurvive()
    data5.textContent = passengerObjects[i].pclass
    data6.textContent = passengerObjects[i].siblingsSpouses
    data7.textContent = passengerObjects[i].parentChildren
    data8.textContent = passengerObjects[i].fare
}
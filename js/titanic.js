
let passengers = titanicStr.split('\n');

for (i = 0; i<passengers.length; i++) {
    passengers[i] = passengers[i].split(',')
}

function splitString (string, select1, select2) {
    let arr = string.split(select1)
    for (i = 0; i<arr.length; i++) {
        arr[i] = arr[i].split(select2)
    }
    return arr
}

//console.log(passengers)

console.log(titanicStr, '\n', ',')

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
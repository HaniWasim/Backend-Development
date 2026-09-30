// Print array elements   
let numbers = [10, 20, 30, 40, 50];
console.log("Print array elements :");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Find array length  

let num = [10, 20, 30, 40, 50];

let count = 0;

for (let element of num) {
    count++;
}
console.log("Array lenght :");

console.log(count);

// Reverse array  

function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

let Array = [10, 20, 30, 40, 50];
console.log("Reverse Array :");

console.log(reverseArray(Array));

// Sum of array  

let SumArr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < SumArr.length; i++) {
    sum = sum + SumArr[i];
}
console.log("Sum of array :");

console.log(sum);

// Filter even numbers  

let EvenNum = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = [];

for (let i = 0; i < EvenNum.length; i++) {
    if (EvenNum[i] % 2 === 0) {
        evenNumbers.push(EvenNum[i]);
    }
}
console.log("Even Numbers");


console.log(evenNumbers);



// *************🔹 Object Questions*************

// Access object properties

console.log("Acess obj Prop :");

let student = {
    name: "Hani",
    age: 19,
    grade: "A"
};

console.log(student.name);
console.log(student.age);
console.log(student.grade);

// Loop through object  

console.log("Loop through obj :");

let Entities = {
    name: "Khan",
    age: 20,
    grade: "A+"
};

for (let key in Entities) {
    console.log(key, Entities[key]);
}

// Calculator

console.log("Calculator :");


let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

// Nested Objs
console.log("Nested Objects :");

let People = {
    name: "Hani",
    age: 19,

    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

console.log(People.address.city);
console.log(People.address.country);

// Convert object to array 
console.log("Obj into Arr:");


let Arr = {
    name: "Waseem",
    age: 40,
    grade: "A"
};

let keys = Object.keys(student);
let values = Object.values(student);

console.log(keys);
console.log(values);
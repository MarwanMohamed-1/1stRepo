/*
“An arrow function does not create its own this context, unlike the normal literal
function.” – Explain with demo
*/
/*Answer: Arrow Function are  the abbreviation of 
regular function one of their characteristics is 
the do they do not create their own 'this' context
they inherit it from surrounding context
*/
/*
“An arrow function does not create its own this context, unlike the normal literal
function.” – Explain with demo
*/
/*Answer: Arrow Function are  the abbreviation of 
regular function one of their characteristics is 
the do they do not create their own 'this' context
they inherit it from surrounding context
*/
///////////////////////////////////////////////////////////////////////////////////////////
/*
1 a-Filter : Making new array from original array elemnents but the elements who 
passed the condition 
*/
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let OddArray = myArray.filter(element => element % 2 !== 0);

console.log(myArray);
console.log(OddArray);

/*
b- For each : method executes a provided function for each array element 
*/
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.forEach(element => {
    if (element % 2 === 0) {
        console.log(element);
    }
});

/*
c-
The map method in JavaScript is used to transform
each element in an array by applying a specific function to each element,
resulting in a new array of the transformed values.
It creates a new array without modifying the original one,
providing an efficient way to apply a function to every element in an 
array and collect the results.
*/
let myArray = [10,20,30,40,50,60,70,80,90,100]
let sqrArray = myArray.map(function (element) {
    return element*element
})
console.log(myArray);
console.log(sqrArray);
////////////////////////////////////////////////////////////////////////

// let myArray = [1, 2, 3, 4, 5];

// for (let index in myArray) {
//     console.log(myArray[index]);
// }

// let myArray = [1, 2, 3, 4, 5];


// for (let element of myArray) {
//     console.log(element);
// }

////////////////////////////////////////////////////
/*
3
*/
// let array1 = [1,2,3]
//     array2 = [4,5]

//     console.log(array1.concat(array2));

//     let allArray = [...array1,...array2]

//     console.log(allArray);

/////////////////////////////////////////////////
/*
4
*/ 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {

    constructor(name, age, university, faculty, finalGrade) {
        super(name, age);
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }

    static whoAmI() {
        console.log("I am a student");
    }

    printData() {
        console.log(`${this.name} is a student in faculty of ${this.faculty} in university ${this.university}. And his final grade is ${this.finalGrade}.`);
    }
}

// let student1 = new Student("Marwan", 20, "Cairo University", "Engineering", "A+");
// student1.printData();
// Student.whoAmI();

// let myArray = [1, 2, 3, 4, 5];
// let arr2 = [6,7,8,9,10];

// console.log(...myArray,...arr2);

// for...in iterates over the keys of an object, including inherited ones. 
// for...of iterates over the values of an iterable object like arrays, strings, sets, etc. 
// forEach() is a method for arrays, sets, and maps, used to execute a function for each element in the collection."

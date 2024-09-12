// Declare a variable named submissions that is initialized to an array with the following objects:

class Student {
    constructor(name, score, passed) {
        this.name = name;
        this.score = score;
        this.passed = passed;
    }
}

let submissions = [
    new Student("Jane", 95, true),
    new Student("Joe", 77, true),
    new Student("Jack", 59, false),
    new Student("Jill", 88, true),
]

// Declare a function named addSubmission
// Parameter(s): array, newName, newScore
// Functionality: construct an object and push it into the array. 
// The object must have the same properties as the objects already in the array. 
// Use conditional statements to set the value for the passed property to true 
// if the score is greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore) {
    array.splice(0, 0, new Student(newName, newScore, false));
    for (let element of array) {
        element.score >= 60 ? element.passed = true :  element.passed = false;
    }
    console.log(array);
}

addSubmission(submissions, "Danny", 59);

// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove an object from the array at
// the specified index using the splice method.

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    console.log(array);
}

// deleteSubmissionByIndex(submissions, 2);


// Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  
// Incorporate the findIndex method and the splice method.

function deleteSubmissionByName(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            array.splice(i, 1);
        }
    }
    console.log(array)
}

// deleteSubmissionByName(submissions, "Jane");


// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. 
// Use conditional statements to set the value for the passed property to true if 
// the score is greater than or equal to 60 and false otherwise. No array method necessary.

    function editSubmission(array, index, score) {
        for (let i = 0; i < array.length; i++) {
            if (i === index && array[i].score > 60) {
                array[i].score = score;
                array[i].passed = true;
            } else {
                array[i].passed = false;
            }
        }
        console.log(array);
    }

    // editSubmission(submissions, 0, 59);


// Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.

function findSubmissionByName(array, name) {
    return array.find((object) => object.name === name);
}


// console.log(findSubmissionByName(submissions, "Jane"));


// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. 

function findLowestScore(array) {
    let lowestScoringStudent = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].score < lowestScoringStudent.score) {
            lowestScoringStudent = array[i];
        }
    }
    return lowestScoringStudent;
}

// console.log(findLowestScore(submissions));

// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.

function findAverageScore(array) {
    let total = 0;
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].score;
    }
    average = total / array.length;
    return average;
}
// console.log(findAverageScore(submissions));

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have passing scores. 

function filterPassing(array) {
    return array.filter((object) => object.passed === true);
}

// console.log(filterPassing(submissions));

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove(array) {
    return array.filter((object) => object.score > 90);
}
// console.log(filter90AndAbove(submissions));
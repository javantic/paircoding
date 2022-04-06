// NOTE create a function that takes an array containing only numbers and return the first element

// function myArray (arr) {
//     return arr(0)
// }
// console.log(myArray[1,2,3,4])

// const myArray = arr => arr[0] // refactor the above into one line. ES6
// console.log(myArray[1,2,3,4])

// NOTE Give two arguments, return an array which contains these two arguments.

// function createArray(a,b) {
//  var arr = [a,b]

//  return arr
// }
// console.log(createArray(1,2)) 

//NOTE Write a function to reverse an array.
// Example: reverseArray([1, 2, 3, 4]) -> [4, 3, 2, 1]

// Attempt - which was WRONG
// function reverseArray(a, b, c, d) {
//     var arr = [4, 3, 2, 1]
//     return arr
// }
// console.log(reverseArray(a, b, c, d))

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);

// const reversed = array1.reverse()

// NOTE correct answer:

// function reverseArray(arr) {    // arr means you can idex the array
//     return arr.reverse()
// }
// console.log(reverseArray(1,2,3,4,5,6,7,8,9)

// and to refractor to be one line using ES6

// const reverseArray = arr => arr.reverse();
// console.log(reverseArray(1,2,3,4,5,6,7,8,9)

// Create a function that accepts an array

// const lastElement = ["Brit", 12, "Blue", "Green"];
// console.log(lastElement[3]);
// can use the .length method or the pop() method

// Create a function that takes an array and returns it as a string

// const result = arrayToString(["Brit", 12, "Blue", "Green"])
// console.log(typeof result)  //NOTE declare the data type 'typeof' to dictate the result method

// function ArrayToString(arr) {
//     return arr.join('')
// }
// console.log(ArrayToString(["Brit", 12, [], true]))

// Create a function that takes an array and returns the datat types of the array values in a new array. 
// ArrayValueTypes(["Brit", 12, "Blue", "Green"]) ->[string, number, string, object, boolean]

function arrayValueTypes(arr) {
    var newArray = [];

    for(var i = 0; i < arr.length; i++) {
    newArray[i] = typeof arr[i]
    }
    return newArray
}
// ! Explanation of the reduce method.

const arrayTest = [1,2,3,4,5,6,7,8,9,9];
// Esta función se va a enviar como parámetro.

function reduceEngine(initialValue, SumValue){
    // The initial value is a value that is the position that is sent to the method
    // Sum is the result of the process.
    return initialValue + SumValue ;
}

// Here we put the function of how the engine works in the reduce method 
const reduceMethodWithArrays = arrayTest.reduce(reduceEngine);

// ! End of the explanation of the reduce method.


//! Calculation of the median

// Second challenge to know if a number is odd or even.
const checkEven = (number) => (number % 2 != 0) ? false : true;

// Engine to the sort function works!
// * Basically works using the a, as the initial position and b, as the second position. If b is higher ll be reposition the a as b and reverse. 
function sortEngine(a, b) {
    return a - b ;
};

// If the array is on its length odd, ll be return the position as the middle character of the array and, if its even ll return two positions the middle and the middle plus one.

let positionA;
let positionB;
function calculatePosition(array) {
    if (!checkEven(array.length)) {
        positionA = Math.floor(array.length / 2);
        return positionA
    } else {
        positionA = Math.floor(array.length / 2);
        positionB = Math.floor(array.length / 2) - 1;
    }
};

// Result of the array sorted
const arraySorted = (array) => (array.sort(sortEngine));
const sortedArray = arraySorted(arrayTest);

// Median algorithm.

let medianValue;
function calculateMedian(array) {
    calculatePosition(array);
    indexOne = positionA;
    indexTwo = positionB;
    (!indexTwo) ? medianValue = array[indexOne] : medianValue = (array[indexOne] + array[indexTwo]) / 2 ;
    return medianValue;
}

calculateMedian(sortedArray);

//! End of calculation of the median.

//! Calculation of the mode with JS vanilla


const arrayTest2 = [1,2,3,4,5,6,7,8,9,9,9,9,9,9,9,9,9,9,'abc'];
function calculateModa(array) {

    let repeatedElements = {};

    array.forEach(element => {
        const index = element;

        if (repeatedElements[index]) {
            repeatedElements[index] += 1; 
        } else {
            repeatedElements[index] = 1; 
        }
    });
    console.log(repeatedElements);
}

calculateModa(arrayTest2);
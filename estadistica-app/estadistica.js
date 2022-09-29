// ! Explanation of the reduce method.

const arrayTest = [1,2,3,4,5,6,7];
console.log(arrayTest.length);
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

function calculatePosition(array) {
    let positionA;
    let positionB;
    
    if (!checkEven(array.length)) {
        positionA = Math.floor(array.length / 2);
    } else {
        positionA = Math.floor(array.length / 2);
        positionB = Math.floor(array.length / 2) + 1;
    }

    console.log(positionA);
    console.log(positionB);
};



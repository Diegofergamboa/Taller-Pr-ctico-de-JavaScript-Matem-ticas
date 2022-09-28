const arrayTest = [0,1,2,3,3,4,5,6,7,56,56,54];

// Esta función se va a enviar como parámetro.

function reduceEngine(initialValue, SumValue){
    // The initial value is a value that is the position that is sent to the method
    // Sum is the result of the process.
    return initialValue + SumValue ;
}

// Here we put the function of how the engine works in the reduce method 
const reduceMethodWithArrays = arrayTest.reduce(reduceEngine);

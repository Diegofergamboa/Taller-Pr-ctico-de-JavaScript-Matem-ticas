const MathModule= {}

MathModule.medianCalculation = function medianCalculation(array){
    const checkEven = (number) => (number % 2 != 0) ? false : true;
    
    function sortEngine(a, b) {
        return a - b ;
    };
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


    function calculateMedian(array) {
        let medianValue;
        calculatePosition(array);
        indexOne = positionA;
        indexTwo = positionB;
        (!indexTwo) ? medianValue = array[indexOne] : medianValue = (array[indexOne] + array[indexTwo]) / 2 ;
        return medianValue;
    };
    return calculateMedian(array);
};

MathModule.calculateMode = function calculateMode(array) {

    let repeatedElements = {};

    array.forEach(element => {
        const index = element;

        if (repeatedElements[index]) {
            repeatedElements[index] += 1; 
        } else {
            repeatedElements[index] = 1; 
        }
    });
    return repeatedElements;
};

MathModule.calculateMode = function calculateMode(array) {
    // Calculation of the repeated elements.
    let newObject = {}
    array.forEach(element => {
        (newObject[element]) ? newObject[element] += 1 : newObject[element] = 1 ;  
    });

    // Conversion to array.
    const arrayTransformed = Object.entries(newObject);

    // Calculation sort by length.
    function sortEngineTwoElements(a, b) {
        return a[1] - b[1] ;
    };
    const sortedArray = arrayTransformed.sort(sortEngineTwoElements);
    
    // Return of the mode.
    const modeArray = sortedArray[sortedArray.length - 1];
    console.log(`El valor de la moda es, ${modeArray[0]}`);
};

MathModule.harmonicAverage = function harmonicAverage(array) {
    // * Reduce method to obtain a final sum.
    function reduceEngineHarmonicAverage(a, b) {
        return (a) + (1/b);
    };
    const reducedArray = array.reduce(reduceEngineHarmonicAverage);
    console.log('reduced Array is: ' + reducedArray)
    // * Calculation of the length for the N value.
    const NValue = array.length - 1 ;
    // * Final phormula.
    const productHarmonicAverage = NValue / reducedArray ;
    return productHarmonicAverage;
};


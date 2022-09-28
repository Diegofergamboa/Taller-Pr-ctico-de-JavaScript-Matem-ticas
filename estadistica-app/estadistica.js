arrayNumber = [0,1,2,3,4,5,6,7,8,9];

const initialValue = 0;
const sumWithIinitial = arrayNumber.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log(sumWithIinitial);

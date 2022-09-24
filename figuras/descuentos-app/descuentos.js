// Variables setup.

const cuponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

const $code = document.querySelector('#cupon');
const $price = document.querySelector('#precio');

const codeValue = $code.value;
const priceValue = $price.value;

// Algorithm for filter.
let resultDiscount = 0;
const resultFilter = () => cuponDiscounts.filter(cupon => {
    if (cupon.code === codeValue) {
        console.log('sirvio');
    }
});


const $buttonCalculationdocument = document.getElementById('calculation');
$buttonCalculationdocument.addEventListener('click', resultFilter)


// // Intentar sacarlo con un método filter.
// Luego con un método find.
// Luego con un método find y filter con una función como condicional .
// Hacer el .map que tenga como parámetro una función .filter.


// Variables setup.

const cuponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

const $codeValue = document.querySelector('#cupon').value;
const $priceValue = document.querySelector('#precio').value;

// Algorithm for filter.

const resultFilter = cuponDiscounts.map(discount => {
    cuponDiscounts.filter
})
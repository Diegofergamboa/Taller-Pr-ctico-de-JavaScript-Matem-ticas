// Variables setup.

const couponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

// Algorithm to set a new object with the correct coupon.




const printDiscount = () => {
    const $userCoupon = document.getElementById('coupon');
    const cuponValue = $userCoupon.value;
    const checkDiscount = () => (couponDiscounts.find(couponList => couponList === cuponValue));
}



const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', printDiscount); 
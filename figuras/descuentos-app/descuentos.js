// Variables setup.

const couponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

// Algorithm to set a new object with the correct answer.

const checkDiscount = () => {
    // Variables to run the algorithm.
    const $userCoupon = document.getElementById('coupon');
    const userCouponValue = $userCoupon.value;

    // Map function 
    const checkCoupon = couponDiscounts.filter(couponList => couponList === userCouponValue);

    // Final return of the function 
    return checkCoupon;
};

const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', checkDiscount);
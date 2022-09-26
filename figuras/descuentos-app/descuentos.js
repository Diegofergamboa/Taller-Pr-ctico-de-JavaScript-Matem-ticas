// Variables setup.

const couponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

// Algorithm to set a new object with the correct coupon.




const calculationDiscount = () => {
    // Principal variables setting.
    const $userCoupon = document.getElementById('coupon');
    const cuponValue = $userCoupon.value;
    
    const $priceUser = document.getElementById('price');
    const userPriceValue = $priceUser.value;
    
    const $printDiscount = document.getElementsByClassName('print-discount');

    // Checker of the code coupon.
    const checkCodeCoupon = (codeCoupon) => {
        if (codeCoupon) { // ¿Should i return a true or false in this validation?
            codeCoupon === cuponValue ;
        } else {
            $printDiscount[0].innerHTML = ` El cupón no aplica, el precio sigue siendo ${userPriceValue}`
        }
    };

    // Find function.
    const checkDiscount = () => (couponDiscounts.find(couponList => couponList === cuponValue));
    // Calculation function.
}   



const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', calculationDiscount); 
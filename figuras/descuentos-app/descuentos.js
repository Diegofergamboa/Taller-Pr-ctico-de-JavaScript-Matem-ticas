// Variables setup.

const couponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

// Algorithm to set a new object with the correct coupon.




function calculationDiscount ()  {
    // Principal variables setting.
    const $userCoupon = document.getElementById('coupon');
    const cuponValue = $userCoupon.value;
    
    const $priceUser = document.getElementById('price');
    const userPriceValue = $priceUser.value;
    
    const $printDiscount = document.getElementsByClassName('print-discount');

    let discount ;
    // Find function.
    function validationCoupon (coupon) {
        if (coupon.code === coupon) {
            return true
        } else {
            $printDiscount[0].innerHTML = `El código de descuento no es válido`
        }
    }
    const findDiscount = () => {
        couponDiscounts.find(validationCoupon(cuponValue));
    };

    if (findDiscount) {
        discount = findDiscount.valueDiscount
    }
    
    // Calculation function.
    const newPrice = userPriceValue * (100 - discount) / 100
    $printDiscount[0].innerHTML = `El nuevo precio con descuento es ${newPrice}`
}   



const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', calculationDiscount); 
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
    // Principal variable setting.
    const $userCoupon = document.getElementById('coupon');
    const couponValue = $userCoupon.value;
    
    const $priceUser = document.getElementById('price');
    const userPriceValue = parseInt($priceUser.value);
    
    const $printDiscount = document.getElementsByClassName('print-discount');

    let discount ;

    const findDiscount = couponDiscounts.find(coupon => coupon.code === couponValue);
    
    if (findDiscount.valueDiscount > 0) {
        discount = findDiscount.valueDiscount; 
        const newPrice = userPriceValue * (100 - discount) / 100;
        return $printDiscount[0].innerHTML = `
        Tu descuento es de ${discount}% </br>
        Lo que equivale a: </br>
        ¡El nuevo precio con descuento es ${newPrice}!
        `
    }
    if (findDiscount === undefined) {
        $printDiscount[0].innerHTML = `${couponValue} como código de cupón es no válido.` 
    }

};



const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', calculationDiscount); 
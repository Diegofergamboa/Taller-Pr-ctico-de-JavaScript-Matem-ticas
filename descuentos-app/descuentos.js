// Array with cupons.

const couponDiscounts = [
    {code : 'D01' , valueDiscount : 10 } ,
    {code : 'D02' , valueDiscount : 20 } ,
    {code : 'D03' , valueDiscount : 30 } ,
    {code : 'D04' , valueDiscount : 40 } ,
    {code : 'D05' , valueDiscount : 50 } ,
];

function calculationDiscount ()  {
    // Principal variable setting.
    const $userCoupon = document.getElementById('coupon');
    const couponValue = $userCoupon.value;
    
    const $priceUser = document.getElementById('price');
    const userPriceValue = parseInt($priceUser.value);
    
    const $printDiscount = document.getElementsByClassName('print-discount');

    const findDiscount = couponDiscounts.find(coupon => coupon.code === couponValue);
    
    // Set of the discount founded or not.
    if (findDiscount) {
        positiveAnswer()
    } else {
        $printDiscount[0].innerHTML = `
            El código ${couponValue} no es válido.
        `
    }
    
    // Algorithm for sucess coupon.
    function positiveAnswer() {
        let discount ;
        
        if (findDiscount.valueDiscount > 0) {
            discount = findDiscount.valueDiscount; 
            const newPrice = userPriceValue * (100 - discount) / 100;
            // Final output for sucess answer
            return $printDiscount[0].innerHTML = `
            Tu descuento es de ${discount}% </br>
            Lo que equivale a: </br>
            ¡El nuevo precio con descuento es $${newPrice}!
            `
        }
    }    
    

};

// Answer of the call to action of the button.
const $calculation = document.getElementById('calculation');
$calculation.addEventListener('click', calculationDiscount); 
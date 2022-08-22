// Principal setter
// const $setterCalculator = document.querySelectorAll('.setter-calculator');

// $setterCalculator.forEach(button => {
//     return (
//         button.addEventListener('click', (event) => {
//             (event.target.textContent === 'Cálculos de cuadrado') ? setLayoutSquare() : null ;
//             (event.target.textContent === 'Cálculos de triángulo') ? setLayoutTriangle() : null ;
//             (event.target.textContent === 'Cálculos de circulo') ? setLayoutCircle() : null ;
//         })
//     )
// });

// Llamando los eventos click de calcular.



const $buttonTriangulo = document.getElementsByClassName('button-triangulo')[0];   
$buttonTriangulo.addEventListener('click' , Triangle);


const $buttonCirculo = document.getElementsByClassName('button-circulo')[0];  
$buttonCirculo.addEventListener('click', Circle);

const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0]; 
$buttonCuadrado.addEventListener('click', Square);


function Triangle() {
    // Llamando los valores del input.
    const base = document.getElementsByClassName('input-base')[0].value;
    const lado1 = document.getElementsByClassName('input-lado1')[0].value;
    const lado2 = document.getElementsByClassName('input-lado2')[0].value;
    
    const baseInt = parseInt(base);
    const lado1Int = parseInt(lado1);
    const lado2Int = parseInt(lado2);

    // Funciones de cálculo.
    function perimetroTriangulo (h, l1, l2) {
        return h + l1 + l2; 
    };

    function areaTriangulo (h, l1, l2) {
        return 0.5 * h * l1; 
    };

    // Output modificando los div de respuesta.
    const resultPerimetroTriangle = perimetroTriangulo(baseInt, lado1Int, lado2Int);
    const areaPerimetroTriangle = areaTriangulo(baseInt, lado1Int, lado2Int);

    document.getElementsByClassName('div-calcular-perimetro-triangle')[0].innerHTML = `
        <p>${resultPerimetroTriangle}</p>
    `
    document.getElementsByClassName('div-calcular-area-triangle')[0].innerHTML = `
    <p>${areaPerimetroTriangle} CM^2</p>
    `
    debugger
};

function Circle(){
    
    const inputRadio = document.getElementsByClassName('input-circulo')[0].value;
    // inputRadio.length > 1 ? $button.addEventListener('click', Circle()) : null ;
    // 2.  Capturar los valores del "input" (radio).
    const radioNumber = parseInt(inputRadio);

    // 3. Hacer los calculos.
    const PI = Math.PI;


    function perimetroCirculo(radio) {
            return 2 * PI * radio ;    
    };

    const areaCirculo = (radio) => {
            return PI * (radio ** 2);
    };


    const resultAreaCircle = Math.round(areaCirculo(radioNumber), 2);
    const resultPerimetroCircle = Math.round(perimetroCirculo(radioNumber), 2);

    document.getElementsByClassName('div-calcular-perimetro-circle')[0].innerHTML = `
        <p>El valor del perímetro ${resultPerimetroCircle} CM.</p>
    `;

    document.getElementsByClassName('div-calcular-area-circle')[0].innerHTML = `
    <p>El valor del área es ${resultAreaCircle} CM^2.</p>
    `;
    debugger
};


function Square() {
    
    const inputValue = document.getElementsByClassName('input-cuadrado')[0].value;
    // Se hacen los cálculos del área y el cuadrado.
    
    const areaCuadrado = (lado) => { return lado ** 2};
    const perimetroCuadrado = (lado) => { return lado * 4};
    
    // Se llaman los elementos a modificar y se lanzan los cálculos.

    const resultAreaSquare = areaCuadrado(inputValue);
    const resultPerimetroSquare = perimetroCuadrado(inputValue);

    document.getElementsByClassName('div-calcular-area-square')[0].innerHTML = 
    `<p>El valor del área es ${resultAreaSquare} CM^2</p>`

    document.getElementsByClassName('div-calcular-perimetro-square')[0].innerHTML = 
        `<p>El valor del perímetro es ${resultPerimetroSquare}</p>`
        debugger
};





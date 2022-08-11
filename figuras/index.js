// Principal setter
// import { Circle } from "./circle.js";
import { Square } from "./square.js";
import { Triangle } from "./triangle.js";
// import { Circle } from "./circle.js";


// const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
// $buttonCuadrado.addEventListener('click' , Square);

// const $buttonTriangulo = document.getElementsByClassName('button-triangulo')[0];
// $buttonTriangulo.addEventListener('click' , Triangle);


//! pa abajo.


// 1.  Capturar el botón de "calcular". (inicializador).
const $buttonCirculo = document.getElementsByClassName('button-circulo')[0];
$buttonCirculo.addEventListener('click', Circle)

function Circle(){
    // 2.  Capturar los valores del "input" (radio).
    const inputRadio = document.getElementsByClassName('input-circulo')[0].value;
    const radioNumber = parseInt(inputRadio);
    
    // 3. Hacer los calculos.
    const PI = Math.PI;
    // const perimetroCirculo = 2 * PI * radioNumber;


    function perimetroCirculo(radio) {
        return 2 * PI * radio ;    
    };

    const areaCirculo = (radio) => {
        return PI * (radio ** 2);
    };
    
}




// * construir las variables.
// * construir las funciones.
// 4. Imprimir en el DOM.
// * identificarlo donde está.
// * ejecutar las funciones de cálculo.
// * imprimir el DOM los resultados.








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
    const resultPerimetro = perimetroTriangulo(baseInt, lado1Int, lado2Int);
    const areaPerimetro = areaTriangulo(baseInt, lado1Int, lado2Int);

    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>${resultPerimetro}</p>
    `
    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
    <p>${areaPerimetro} CM^2</p>
    `
};

//! index.

{/*         <div class="card-triangulo">
            <div class="triangulo">
                <h2 class="card-h2">Cálculos del triángulo</h2>
                <img class="image-triangulo" src="https://www.neurochispas.com/wp-content/uploads/2021/03/formula-de-triangulo-escaleno.png" />
                <div class="triangulo-medidas">
                    <input type="number" class="input-triangulo input-base" placeholder="Ingrese el valor de uno de la base"/>
                    <input type="number" class="input-triangulo input-lado1" placeholder="Ingrese el valor de uno del primer lado"/>
                    <input type="number" class="input-triangulo input-lado2" placeholder="Ingrese el valor de uno del segundo lado"/>
                </div>
                <button class="button-triangulo" type="button">Calcular</button>
            </div>
            <div class="div-calcular">
                <div class="div-calcular-perimetro">Perímetro</div>
                <div class="div-calcular-area">Área</div>
            </div>
        </div> 
*/}


export { Triangle } ;
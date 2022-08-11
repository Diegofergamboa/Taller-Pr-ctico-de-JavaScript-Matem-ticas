function Circle(){
    // 2.  Capturar los valores del "input" (radio).
    const inputRadio = document.getElementsByClassName('input-circulo')[0].value;
    const radioNumber = parseInt(inputRadio);
    
    // 3. Hacer los calculos.
    const PI = Math.PI;


    function perimetroCirculo(radio) {
        return 2 * PI * radio ;    
    };

    const areaCirculo = (radio) => {
        return PI * (radio ** 2);
    };

    // resultados

    const resultArea = Math.round(areaCirculo(radioNumber), 2);
    const resultPerimetro = Math.round(perimetroCirculo(radioNumber), 2);

    // Imprimir en el DOM.

    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>El valor del perímetro ${resultPerimetro} CM.</p>
    `;

    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>El valor del área es ${resultArea} CM^2.</p>
    `;
    
};

/* 
            <div class="card-circulo">
                <div class="circulo">
                    <h2 class="card-h2">Cálculos del circulo</h2>
                    <img class="image-circulo" src="https://www.problemasyecuaciones.com/geometria2D/area/circulo/img0.png" />
                    <input type="number" class="input-circulo input-base" placeholder="Ingrese el valor del radio"/>
                    <button class="button-circulo" type="button">Calcular</button>
                <div class="div-calcular">
                    <div class="div-calcular-perimetro">Perímetro</div>
                    <div class="div-calcular-area">Área</div>
                </div>
                </div>
            </div>
*/

export { Circle } ;
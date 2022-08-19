const html = `
    <div class="card-circulo >
        <div class="circulo">
            <h2 class="card-h2">Cálculos del circulo</h2>
    <input type="number" class="input-circulo input-base" placeholder="Ingrese el valor del radio"/>
    <button class="button-circulo" type="button">Calcular</button>
    <div class="div-calcular">
        <div class="div-calcular-perimetro">Perímetro</div>
        <div class="div-calcular-area">Área</div>
        </div>
    </div>
    </div>
`

function setLayoutCircle(){
        
        const impression = () => {
            return document.getElementsByClassName('main-section_calculation')[0].innerHTML = html;
        }
        const buttonListener = new Promise(resolve => {
            const inputRadio = document.getElementsByClassName('input-circulo')[0].value;
            const $button = document.getElementsByClassName('button-circulo')[0];
            inputRadio.length > 1 ? $button.addEventListener('click', Circle()) : null ;
        )}
        return (impression());
};


function Circle(){
        const $button = document.getElementsByClassName('button-circulo')[0];
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


        const resultArea = Math.round(areaCirculo(radioNumber), 2);
        const resultPerimetro = Math.round(perimetroCirculo(radioNumber), 2);

        document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
            <p>El valor del perímetro ${resultPerimetro} CM.</p>
        `;

        document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>El valor del área es ${resultArea} CM^2.</p>
        `;
};


export {  setLayoutCircle } ;
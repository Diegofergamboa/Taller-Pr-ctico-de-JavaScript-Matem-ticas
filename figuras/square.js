function setLayoutSquare(){
    return(
        document.getElementsByClassName('main-section_calculation')[0].innerHTML = 
        `
            <div class="card-cuadrado">
            <div class="cuadrado">
                <h2 class="card-h2">Cálculos del cuadrado</h2>
                <img class="image-cuadrado" src="https://www.abcfichas.com/wp-content/uploads/2020/12/Formula-Area-Cuadrado.jpg" />
                <input type="number" class="input-cuadrado" placeholder="Ingrese el valor de uno de los lados"/>
                <button class="button-cuadrado" type="button">Calcular</button>
            </div>
            <div class="div-calcular">
                <div class="div-calcular-perimetro">Perímetro</div>
                <div class="div-calcular-area">Área</div>
            </div>
            </div>
        `
    );
};

new Promise(function(resolve) {

    resolve(setLayoutSquare());
    
    }).then(function(){
    const $buttonCuadrado = document.getElementsByClassName('button-cuadrado')[0];
    $buttonCuadrado.addEventListener('click' , Square);
});


function Square() {
    
    // Se captura el valor del input.
    const inputValue = document.getElementsByClassName('input-cuadrado')[0].value;
    console.log(inputValue);
    // Se hacen los cálculos del área y el cuadrado.
    
    const areaCuadrado = (lado) => { return lado ** 2};
    const perimetroCuadrado = (lado) => { return lado * 4};
    
    // Se llaman los elementos a modificar y se lanzan los cálculos.
    const resultArea = areaCuadrado(inputValue);
    const resultPerimetro = perimetroCuadrado(inputValue);

    //! Área.
    document.getElementsByClassName('div-calcular-area')[0].innerHTML = `
        <p>El valor del área es ${resultArea} CM^2</p>
    `;

    //! Perímetro.
    document.getElementsByClassName('div-calcular-perimetro')[0].innerHTML = `
        <p>El valor del perímetro es ${resultPerimetro}</p>
    `;
};


export { Square, setLayoutSquare } ;
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



export { Triangle } ;
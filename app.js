

let box = document.getElementById('box')
let numeros = '';

const limiteCaracteres = 12;


const insert = (numero) => {
    
    if(numeros.length < limiteCaracteres) {
        numeros += numero;
        box.innerHTML = numeros;
        updateDisplay()
    }else {
        box.innerHTMl = 'Erro'
    }


}

const limpar = () => {
    numeros = '';

    updateDisplay()
}

const updateDisplay = () => {
    box.innerHTML = numeros;
}

const apagar = () => {
    numeros = numeros.slice(0, -1);

    updateDisplay();
}

const calcular = () => {

try {
    let resultadoCalculado = eval(numeros);
    
        box.innerHTML = resultadoCalculado;
    
        numeros = resultadoCalculado.toString();

}catch (error) {

    box.innerHTML = 'Erro';
    numeros = '';
}



}
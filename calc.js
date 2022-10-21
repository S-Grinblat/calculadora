//!operRealizada = operation
//!txtResult = result
//!operadorSeleccionado = selected_operator
//!numero = number
//!ultimoDigitoApretado = last_digit

let parcial = "";
let operation = document.getElementById('Operation');
let result = document.getElementById('Result');
let selected_operator = "";
let number = "";
let last_digit = "";

function operator(num){
    number = number + num;
    parcial = parcial + num;
    operation.innerHTML = parcial;

    if(number == '0' && selected_operator == '/'){
        Limpiar();
        result.innerHTML = 'Undefined';
        return;
    }
    if(last_digit == 'operacion') {
        last_digit = 'number';
    }
}

function operacion(oper) {
    selected_operator = oper;
    last_digit = 'operacion';
    parcial = parcial + oper;
    number = " ";
    operation.innerHTML = parcial;
}

function calculation(){
    parcial = eval(parcial);
    result.innerHTML = parcial;
    parcial = parcial.toString();
    number = " ";
    operation.innerHTML = parcial;
}

function Limpiar() {
    selected_operator = "0";
    parcial = "";
    result.innerHTML = "";
    number = "";
    last_digit = "";
    operation.innerHTML = '0'; 
}

function erase() {
    if(parcial.length === -1){
        parcial = '0';
    } else {
        parcial = parcial.substring(0, parcial.length -1);
    }
}

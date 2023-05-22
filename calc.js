let parcial = "";
let Operation = document.getElementById('operation');
let Result = document.getElementById('result');
let selected_operator = "";
let number = "";
let last_digit = "";

function operator(num){
    number = number + num;
    parcial = parcial + num;
    Operation.innerHTML = parcial;

    if(number == '0' && selected_operator == '/'){
        Limpiar();
        Result.innerHTML = 'Undefined';
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
    Operation.innerHTML = parcial;
}

function calculation(){
    parcial = eval(parcial);
    Result.innerHTML = parcial;
    parcial = parcial.toString();
    number = " ";
    Operation.innerHTML = parcial;
}

function limpiar() {
    selected_operator = "0";
    parcial = "";
    Result.innerHTML = "";
    number = "";
    last_digit = "";
    Operation.innerHTML = '0'; 
}

function erase() {
    if(parcial.length === -1){
        parcial = '0';
    } else {
        parcial = parcial.substring(0, parcial.length -1);
    }
}

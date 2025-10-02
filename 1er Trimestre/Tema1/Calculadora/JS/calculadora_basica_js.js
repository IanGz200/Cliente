/* Primer numero */
var valor1;
/* Segundo numero */
var valor2;
/* operador utilizado en la operación */
var operador;

/**
 * Añade los numeros pulsados a pantalla
 */
function add(num) {

    /**
     * En caso de tener un 0 lo elimina para que no tengamos 0s a la izquierda, en caso de pulsar la coma no se borra el
     * 0 para tener decimales
     */
    if (document.getElementById("valor_numero").value === "0") {
        if (num==="."){
            document.getElementById("valor_numero").value = "0"+num;
        }else {
            document.getElementById("valor_numero").value = "";
            document.getElementById("valor_numero").value += num;
        }
    } else {
        document.getElementById("valor_numero").value += num;
    }
}

/**
 * Restablece los valores por defecto
 */
function darC() {

    document.getElementById("valor_numero").value = "0";
    operador = "";

}

/**
 * Dependiendo del operador realiza la operacion correspondiente de los valores 1 y 2
 */
function esIgual() {

    valor2 = document.getElementById("valor_numero").value.replace(valor1+operador, "");

    switch (operador) {
        case "+":
            /**
             * Suma
             */
            document.getElementById("valor_numero").value = parseFloat(valor1)+parseFloat(valor2);
            break;
        case "-":
            /**
             * Resta
             */
            document.getElementById("valor_numero").value = parseFloat(valor1)-parseFloat(valor2);
            break;
        case "*":
            /**
             * Multiplicacion
             */
            document.getElementById("valor_numero").value = parseFloat(valor1)*parseFloat(valor2);
            break;
        case "/":
            /**
             * Division
             */
            document.getElementById("valor_numero").value = parseFloat(valor1)/parseFloat(valor2);
            break;
        case "^":
            /**
             * Potencia
             */
            document.getElementById("valor_numero").value = parseFloat(valor1)**parseFloat(valor2);
            break;
    }
}

/**
 * Define el valor1 y el operador a usar en el calculo
 * Suma en este caso
 */
function sumar(){

    valor1 = document.getElementById("valor_numero").value;
    document.getElementById("valor_numero").value += "+";
    operador = "+";

}

/**
 * Define el valor1 y el operador a usar en el calculo
 * Resta en este caso
 */
function restar(){

    valor1 = document.getElementById("valor_numero").value;
    document.getElementById("valor_numero").value += "-";
    operador = "-";

}

/**
 * Define el valor1 y el operador a usar en el calculo
 * Multiplicación en este caso
 */
function multiplicar(){

    valor1 = document.getElementById("valor_numero").value;
    document.getElementById("valor_numero").value += "*";
    operador = "*";

}

/**
 * Define el valor1 y el operador a usar en el calculo
 * Division en este caso
 */
function dividir(){

    valor1 = document.getElementById("valor_numero").value;
    document.getElementById("valor_numero").value += "/";
    operador = "/";

}

/**
 * Define el valor1 y el operador a usar en el calculo
 * Potencia en este caso
 */
function potencia(){

    valor1 = document.getElementById("valor_numero").value;
    document.getElementById("valor_numero").value += "^";
    operador = "^";

}
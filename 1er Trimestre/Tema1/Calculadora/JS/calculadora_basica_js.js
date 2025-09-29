var valor1;
var valor2;

var numero = document.getElementById("valor_numero");

function add(num){

    if(numero.value==0){
        numero = num;
        numero.innerText = num;
    }else {

        numero = numero + "" + num;
    }

    console.log(numero);

}

function act(){

}
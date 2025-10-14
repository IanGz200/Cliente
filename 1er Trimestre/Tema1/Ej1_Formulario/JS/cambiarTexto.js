function cambiar_texto(){
    if (document.getElementById("prueba").innerHTML === "Otro texto") {

        document.getElementById("prueba").innerHTML = "Texto original";
        
    }else document.getElementById("prueba").innerHTML = "Otro texto"
    
    
}

function cambiar_tamaño(){

    if (document.getElementById("prueba").style.fontSize === "16px") {
        
        document.getElementById("prueba").style.fontSize = "100px";

    } else document.getElementById("prueba").style.fontSize = "16px"

}

function cambiar_color() {

    if (document.getElementById("prueba").style.color === "black") {
        
        document.getElementById("prueba").style.color = "red";

    } else document.getElementById("prueba").style.color = "black"
    
}
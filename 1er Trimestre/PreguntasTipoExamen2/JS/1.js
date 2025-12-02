document.getElementById('boton').addEventListener('click', function(){
    let nota = document.getElementById('nota').value;
    if(nota == '' || nota > 10){
        alert('Introduzca una nota válida')
    } else if(nota >=0 && nota < 5){
        alert('Suspenso')
    }else if(nota < 6){
        alert('Aprobado')
    } else if(nota < 7){
        alert('Bien')
    } else if(nota < 9){
        alert('Notable')
    } else if(nota <= 10){
        alert('Sobresaliente')
    }
})
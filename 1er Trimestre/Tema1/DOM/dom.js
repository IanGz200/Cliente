// =================================================================
// 1. Contenido y Atributos
// =================================================================
function cambiarContenido() {
    // Solución: Usar getElementById y textContent
    const parrafo = document.getElementById("parrafo-contenido");
    parrafo.textContent = "¡El DOM ha manipulado este texto correctamente!";
}

function cambiarAtributo() {
    // Solución: Usar getElementById y setAttribute
    const imagen = document.getElementById("imagen-dom");
    imagen.setAttribute('src', 'https://via.placeholder.com/150/e74c3c/FFFFFF?Text=Cambiado');
    imagen.setAttribute('alt', 'Nueva imagen DOM');
    imagen.setAttribute('title', 'Imagen cambiada por el DOM');
}

// =================================================================
// 2. Estilos y Clases
// =================================================================
function cambiarFondo() {
    // Solución: Usar getElementById y la propiedad style
    const caja = document.getElementById("caja-estilo");
    caja.style.backgroundColor = "purple";
    caja.style.border = "4px dashed orange"; // Añadimos algo extra
}

function aplicarClase() {
    // Solución: Usar getElementById y la propiedad classList.toggle
    const parrafo = document.getElementById("parrafo-contenido");
    parrafo.classList.toggle('resaltado'); // La clase 'resaltado' está definida en CSS
}


// =================================================================
// 3. Manejo de Eventos y Creación de Nodos
// =================================================================
const botonEvento = document.getElementById("boton-evento");

// Solución: Usar addEventListener
botonEvento.addEventListener('click', function() {
    console.log('Evento DOM capturado: El usuario hizo clic en el botón.');
    botonEvento.textContent = '¡Clic detectado!';
});


function crearNuevoElemento() {
    // Solución: Usar createElement y appendChild
    
    // 1. Crear un nuevo elemento (nodo)
    const nuevoLi = document.createElement('p'); 
    
    // 2. Asignarle el contenido
    nuevoLi.textContent = `Elemento creado y añadido al DOM. (${new Date().toLocaleTimeString()})`;
    
    // 3. Seleccionar el contenedor (el padre)
    const contenedor = document.getElementById("contenedor-nodos");
    
    // 4. Añadir el nuevo nodo al contenedor
    contenedor.appendChild(nuevoLi);
}
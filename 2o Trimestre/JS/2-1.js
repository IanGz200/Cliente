const PAISES = [
    {nombre: "España", capital: "Madrid", continente:"Europa", moneda:"Euro"},
    {nombre: "Francia", capital: "París", continente: "Europa", moneda: "Euro"},
    {nombre: "Italia", capital: "Roma", continente: "Europa", moneda: "Euro"},
    {nombre: "Alemania", capital: "Berlín", continente: "Europa", moneda: "Euro"},
    {nombre: "Portugal", capital: "Lisboa", continente: "Europa", moneda: "Euro"},
    {nombre: "Marruecos", capital: "Rabat", continente: "África", moneda: "Dírham"}
];

/**
 * Recibe un array de paises
 * Devuelve el numero total de paises en la lista
 * @param array de paises
 */
function contarPaises(array) {

}

/**
 * Recibe un array de paises
 * Devuelve un array con los paises e orden inverso
 * El array original no debe modificarse
 * @param array de paises
 */
function inversa(array){

}

/**
 * Recibe un array de paises y un objeto pais
 * Añade el nuevo pais al final del array
 * Devuelve la nueva longitud del array
 * @param array de paises
 * @param nuevoPais , pais a introducir al array
 */
function agregarPais(array, nuevoPais){

}

/**
 * Recibe un array de paises
 * Elimina el ultimo pais de la lista
 * Devuelve el objeto eliminado de paises
 * @param array de paises
 */
function bajaPais(array){

}

/**
 * Recibe un array de paises
 * Devuelve un nuevo array donde cada pais se transforma en un objeto con:
 * -nombre(string): nombre del pais
 * -inicial(string): primera letra del nombre
 * -continente(string): continente del pais
 * @param array de paises
 */
function formatearPaises(array){

}

/**
 * Recibe un array de paises y un continente(string)
 * Devuelve un nuevo array que solo contenga los paises del continente especificado
 * @param array de paises
 * @param continente usado como filtro
 */
function filtrarPaises(array, continente){

}

/**
 * Recibe un array de paises y una moneda(string)
 * Devuelve un array con los nombres de los paises que usan esa moneda
 * @param array de paises
 * @param moneda usada como filtro
 */
function buscarPorMoneda(array, moneda){

}

/**
 * Recibe un array de paises
 * Devuelve el nombre del pais cuya capital tiene mas caracteres
 * En caso de empate se devuelve el primero encontrado
 * @param array de paises
 */
function capitalMasLarga(array){

}
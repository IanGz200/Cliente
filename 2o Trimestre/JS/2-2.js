const PAISES = [
    {nombre: "España", capital: "Madrid", continente:"Europa", moneda:"Euro"},
    {nombre: "Francia", capital: "París", continente: "Europa", moneda: "Euro"},
    {nombre: "Italia", capital: "Roma", continente: "Europa", moneda: "Euro"},
    {nombre: "Alemania", capital: "Berlín", continente: "Europa", moneda: "Euro"},
    {nombre: "Portugal", capital: "Lisboa", continente: "Europa", moneda: "Euro"},
    {nombre: "Marruecos", capital: "Rabat", continente: "África", moneda: "Dírham"}
];

/**
 * Constante que almacena los criterios por los que se filtraran los paises en la funcion filtrarPorCriterios
 * @type {
 *      {
 *      continente: string,
 *      minLetrasCapital: number
 *      }
 * }
 */
const criterios = {
    continente: "Europa",
    minLetrasCapital: 5
};

/**
 * Recibe un array de paises
 * Devuelve un nuevo array donde cada pais se transforma en un objeto con:
 * -codigo(string): primeras 3 letras del nombre en mayuscula
 * -info(string): texto con formato "Nombre(Capital)"
 * -tieneEuro(boolean): true si la moneda es "Euro", false en caso contrario
 * @param array de paises
 */
function resumenPaises(array){

}

/**
 * Recibe un array de paises y un objeto criterios que puede contener:
 * -continente(string): filtra por continente
 * -moneda(string): filtra por moneda
 * -minLetrasCapital(number): filtra por el numero de letras de la capital
 * Devuelve un nuevo array con los paises que cumpren TODOS los critrios proporcionados
 * Los criterios son opcionales, se filtrará solo por los proporcionados
 * @param array de paises
 * @param criterios por los que se filtra el array
 */
function filtrarPorCriterios(array, criterios){

}

/**
 * Recibe un array de paises
 * Devuelve un objeto donde:
 * -Las claves son los nombres de los continentes
 * -Los valores son objetos con:
 *  -total(number): numero de paises en ese continente
 *  -monedas(array): lista unica de monedas usadas en ese continente
 *  -paises(array): nombres de los paises del continente
 * @param array de paises
 */
function estadisticasContinentes(array){

}

/**
 * Recibe un array de paises
 * Devuelve un array transformado donde:
 * -solo incluye paises cuya capital tenga mas de 4 letras
 * -Cada elemento es un string con formato "La capital de [NOMBRE] es [CAPITAL] y tiene [X]letras"
 * -El array resultante debe estar ordenado alfabeticamente por nombre del pais
 * @param array
 */
function informeCapitales(array){

}
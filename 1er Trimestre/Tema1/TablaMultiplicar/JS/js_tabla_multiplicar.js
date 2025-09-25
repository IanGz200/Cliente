/**
 * Genera una tabla y la añade al body
 * @param numero numero que usamos de referencia para la tabla de multiplicar
 */
function generar_tabla(numero) {

    if (numero === "" ) {

        alert("Introduce un numero");

    } else {

        if(document.getElementById('tabla') !== null){

            document.body.removeChild(document.getElementById("tabla"));

            const body = document.body;
            const tabla = document.createElement("table");
            tabla.setAttribute("id", "tabla");

            body.appendChild(generar_header(tabla, numero));

        }else {

            const body = document.body;
            const tabla = document.createElement("table");
            tabla.setAttribute("id", "tabla");

            body.appendChild(generar_header(tabla, numero));
        }
    }
}

/**
 * Genera el header de una tabla, en este caso con numeros de 1 al 10 y se la pasa a otro metodo que genera el body
 *
 * @param tabla La tabla a la que generar el header
 * @param numero En este caso un numero que necesita el siguiente metodo para generar la tabla de multiplicar
 * @returns una tabla con header y se la pasa a otro metodo que genera el body
 */
function generar_header(tabla,numero) {

    console.log(tabla);

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    for (let i = 1; i <= 10; i++) {

        let th = document.createElement("th");
        th.innerHTML = i;

        tr.appendChild(th);

    }

    thead.appendChild(tr);
    tabla.appendChild(thead);

    return generar_tbody(tabla,numero);
}

/**
 * Metodo que dada una tabla con header, le genera un body. En este caso una tabla de multiplicar con un numero dado
 * @param tabla tabla donde introducir el body
 * @param numero el numero a multiplicar
 * @returns una tabla con header y body.
 */
function generar_tbody(tabla,numero) {

    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    for (let i = 1; i <= 10; i++) {

        let td = document.createElement("td");
        td.innerHTML = i*numero;

        tr.appendChild(td);

    }

    tbody.appendChild(tr);
    tabla.appendChild(tbody);

    return tabla;
}
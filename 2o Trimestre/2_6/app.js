const API_URL = "https://jsonplaceholder.typicode.com/users";
class Usuario {
    constructor(id, username, name, email, phone) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class UsuarioController {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.tablaBody = document.getElementById("usuarios-tbody");
        this.modal = document.getElementById("modal-usuario");
        this.btnCerrarModal = document.getElementsByClassName("cerrar")[0];
        this.form = document.getElementById("postUsuario");
        this.btnIsertar = document.getElementById("btn-insertar");
        this.btnCargar = document.getElementById("btn-cargar");
        this.tabla = document.getElementById("tabla-usuarios");

    }

    async obtenerTodos() {
        try {
            const respuesta = await fetch(this.apiUrl);
            const usuarios = await respuesta.json();
            this.rellenarTabla(usuarios);
        } catch (error) {
            console.error("Error cargando usuarios: ", error.message);
        }
    }

    async getUserById(id) {
        try {
            const respuesta = await fetch(this.apiUrl + `/${id}`);
            const usuario = await respuesta.json();
            return usuario;
        } catch (error) {
            console.error(`Error cargando usuario ${id}: `, error.message);
        }
    }

    setUser(usuario) {
        if (usuario.id) {
            this.ejecutarRequest(this.apiUrl + `/${usuario.id}`, "put", usuario);
        } else {
            this.ejecutarRequest(this.apiUrl, "post", usuario);
        }
    }

    async delete(id) {
        try {
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            };

            const response = await fetch(API_URL + `/${id}`, options);
            if (!response.ok) {
                throw new Error("La respuesta de la red no fue correcta");
            } else {
                console.log("Usuario borrado correctamente");
            }
        } catch (error) {
            console.error("Error en el borrado", error);
        }
    }

    prepararModal(usuario) {
        document.getElementById("username").value = usuario.username;
        document.getElementById("nombre").value = usuario.name;
        document.getElementById("correo").value = usuario.email;
        document.getElementById("telef").value = usuario.phone;
        document.getElementById("userId").value = usuario.id;
    }

    abrirModal() {
        this.modal.style.display = "block";
    }

    cerrarModal() {
        this.modal.style.display = "none";
    }

    async ejecutarRequest(url, metodo, datos) {
        const respuesta = await fetch(url, {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
                "Content.type": "aplication/json; charset=UTF_8;",
            },
        });
        if (respuesta.ok) {
            const respuestaJSON = await respuesta.json();
            console.log("Usuario guardardo " + JSON.stringify(respuestaJSON));
        }
    }

    rellenarTabla(usuarios) {
        this.vaciarTabla();
        usuarios.forEach((usuario) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.username}</td>
            <td>${usuario.phone}</td>
            <td>
                <button type="button" onclick="controller.modificar(${usuario.id})">Editar</button>
                <button type="button" onclick="controller.delete(${usuario.id})">Borrar</button>
            </td>`;

            this.tablaBody.appendChild(fila);
        });
        this.tabla.style.display = "revert";
    }

    async modificar(id) {
        const usuario = await this.getUserById(id);
        controller.prepararModal(usuario);
        controller.abrirModal();
    }

    vaciarTabla() {
        while (this.tablaBody.firstChild) {
            this.tablaBody.removeChild(this.tablaBody.firstChild);
        }
        this.tabla.style.display = "none";
    }

}

const controller = new UsuarioController(API_URL);

controller.btnCargar.addEventListener("click", function (event) {
    controller.obtenerTodos();
});

controller.btnIsertar.addEventListener("click", function (event) {
    controller.abrirModal();
});

controller.btnCerrarModal.addEventListener('click', function(event) {
    controller.cerrarModal();
})

guardarUsuario = () => {
    id = document.getElementById("userId").value;
    const usuario = new Usuario(
        id ? id : null,
        document.getElementById("username").value,
        document.getElementById("nombre").value,
        document.getElementById("correo").value,
        document.getElementById("telef").value,
    );
    controller.setUser(usuario);
};

document.getElementById('btn-guardar').addEventListener('click', function(event) {
    guardarUsuario();
    controller.cerrarModal()
    controller.form.reset()
    document.getElementById("userId").value = '';
})

/*
const tablaUsuarios = document.getElementById("tabla-usuarios");
const tbodyUsuarios = document.getElementById("usuarios-tbody");
let listaUsuarios;

// TODO: Obtener y mostrar usuarios
async function fetchUsers() {
    // Tu código aquí...
    try {
        const respuesta = await fetch(API_URL);
        listaUsuarios = await respuesta.json();
        vaciarTabla(tablaUsuarios, tbodyUsuarios);
        rellenarTablaUsuarios(listaUsuarios);
        tablaUsuarios.style.display = "revert";
    } catch (error) {
        console.error("Error cargando usuarios: ", error.message);
    }
}

// TODO: Crear nuevo usuario
async function createUser(data) {
    // Tu código aquí...
    try {
        fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                username: data.username,
                email: data.email,
                address: data.address,
                phone: data.phone,
                website: data.website,
                company: data.company,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        console.error("Error al guardar el usuario: ", error.message);
    }
}

// TODO: Borrar usuario por ID
async function deleteUser(id) {
    // Tu código aquí...
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        const response = await fetch(API_URL + `/${id}`, options);
        if (!response.ok) {
            throw new Error("La respuesta de la red no fue correcta");
        } else {
            console.log("Usuario borrado correctamente");
        }
    } catch (error) {
        console.error("Error en el borrado", error);
    }
}

function vaciarTabla(tabla, tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    tabla.style.display = "none";
}

function rellenarTablaUsuarios(usuarios) {
    usuarios.forEach((usuario) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.email}</td>
            <td>${usuario.username}</td>
            <td>${usuario.phone}</td>
            <td>
                <button type="button" onclick="">Editar</button>
                <button type="button" onclick="deleteUser(${usuario.id})">Borrar</button>
            </td>`;

        tbodyUsuarios.appendChild(fila);
    });
}

// Ventana modal
const modal = document.getElementById("modal-usuario");
// Botón que abre el modal
const boton = document.getElementById("btn-insertar");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
const span =

// Cuando el usuario hace clic en el botón, se abre la ventana
boton.addEventListener("click", function () {
    modal.style.display = "block";
});
// Si el usuario hace clic en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
*/
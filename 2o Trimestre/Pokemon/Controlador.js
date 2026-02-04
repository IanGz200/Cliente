class PokemonController {
    constructor (model, view) {
        this.model = model;
        this.view = view;

        this.view.btnBuscar.addEventListener('click', () => this.ejecutarBusqueda())
        document
            .getElementById("btnFuego")
            .addEventListener("click", () => this.filtrarPorTipo("fire"));
        document
            .getElementById("btnAgua")
            .addEventListener("click", () => this.filtrarPorTipo("water"));
        document
            .getElementById("btnPlanta")
            .addEventListener("click", () => this.filtrarPorTipo("grass"));

        this.init();
    }

    async init() {
        const lista = await this.model.obtenerListado(30);
        this.view.limpiarPantalla();
        for (const poke of lista) {
            const detalles = await this.model.obtenerPokemon(poke.name);
            this.view.dibujarTarjeta(detalles);
        }
    }

    async ejecutarBusqueda() {
        const nombre = this.view.input.value;
        if (!nombre) return;
        try {
            const pokemon = await this.model.obtenerPokemon(nombre);
            this.view.limpiarPantalla();
            this.view.dibujarTarjeta(pokemon);
        } catch (error) {
            console.error(error.message);
        }
    }

    async filtrarPorTipo(tipo) {
        this.view.limpiarPantalla();
        this.view.mostrarCargando();
        const listado = await this.model.obtenerPorTipo(tipo)
        this.view.limpiarPantalla();
        for (const poke of listado) {
            const detalles = await this.model.obtenerPokemon(poke.name);
            this.view.dibujarTarjeta(detalles);
        }
    }
}

const app = new PokemonController(new PokemonModel(), new PokemonView());
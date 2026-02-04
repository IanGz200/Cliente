class Vista {
    constructor() {
        this.container = document.getElementById('pokemonContainer');
        this.input = document.getElementById('pokemonInput');
        this.btn = document.getElementById('btnBuscar');
    }

    dibujarTarjeta(pokemon) {

        if (pokemon.types[1]) {
            this.container.innerHTML = `
        <div class="col">
            <div class="card h-100 pokemon-card shadow-sm">
                <img src='${pokemon.sprites.other['official-artwork'].front_default}' class="card-img-top p-2">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                    <p class="text-muted">ID: ${pokemon.id}</p>
                    <span class="badge bg-primary">
                        ${pokemon.types[0].type.name}
                    </span>
                    <span class="badge bg-secondary">
                        ${pokemon.types[1].type.name}
                    </span>
                </div>
            </div>
        </div>`;
        } else {

            this.container.innerHTML = `
        <div class="col">
            <div class="card h-100 pokemon-card shadow-sm">
                <img src='${pokemon.sprites.other['official-artwork'].front_default}' class="card-img-top p-2">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                    <p class="text-muted">ID: ${pokemon.id}</p>
                    <span class="badge bg-primary">
                        ${pokemon.types[0].type.name}
                    </span>
                </div>
            </div>
        </div>`;
        }
    }

    limpiarPantalla(){
        this.container.innerHTML = ``;
    }

    mostrarCargando() {
        this.container.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-danger" role="status"></div>
            <p class="mt-2 text-muted">Buscando en la PokéDex...</p>
        </div>`;
    }
}

const container = document.getElementById('pokemonContainer');
const input = document.getElementById('pokemonInput');
const btn = document.getElementById('btnBuscar');

async function obtenerPokemon(nombre) {

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);

        if (!res.ok) {
            throw new Error('Pokemon no encontrado');
        }

        return res.json();

    } catch (err) {
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err.message}
            </div>
        `
    }
}

function dibujarTarjeta(pokemon) {

    if (pokemon.types[1]) {
        container.innerHTML = `
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

        container.innerHTML = `
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

btn.addEventListener('click', async () => {
    const nombre = input.value;
    const datos = await obtenerPokemon(nombre).then(
        (pokemon) => dibujarTarjeta(pokemon)
    )
});
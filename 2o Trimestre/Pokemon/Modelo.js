class PokemonModel {
    constructor() {
        this.urlBase = "https://pokeapi.co/api/v2/pokemon";
    }

    async obtenerPokemon(nombre) {
        const respuesta = await fetch(`${this.urlBase}/${nombre.toLowerCase()}`);
        if (!respuesta.ok) throw new Error("Pokémon no encontrado");
        return await respuesta.json();
    }

    async obtenerListado(limite = 12) {
        const respuesta = await fetch(`${this.urlBase}?limit=${limite}`);
        const datos = await respuesta.json();
        return datos.results;
    }

    async obtenerPorTipo(tipo) {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipo.toLowerCase()}`);
        const datos = await respuesta.json();
        return datos.pokemon.map(p => p.pokemon);
    }
}
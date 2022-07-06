
async function searchPokemonFilter(event, setPokemomsUrl, permaPokemon) {
    let pokemonName = event.target.value;
    pokemonName = pokemonName.toLowerCase();

    if (!pokemonName.length) return setPokemomsUrl(permaPokemon);

    const filteredPokedexList = permaPokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(pokemonName) ||
            String(pokemon.id).includes(pokemonName)
    });
    if (!filteredPokedexList.length) return setPokemomsUrl(permaPokemon);

    return setPokemomsUrl(filteredPokedexList);
};
export default searchPokemonFilter;
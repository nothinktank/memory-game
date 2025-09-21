import { Pokedex } from "pokeapi-js-wrapper";

export const pokedex = new Pokedex();

// Export a function to get Pokemon data
export const getPokemonByName = async (name) => {
    return await pokedex.getPokemonByName(name);
};

// Export a function to get Pokemon species data (includes descriptions)
export const getPokemonSpecies = async (name) => {
    return await pokedex.getPokemonSpeciesByName(name);
};

// Export a function to get Pokemon description
export const getPokemonDescription = async (name) => {
    try {
        const speciesData = await pokedex.getPokemonSpeciesByName(name);
        const descriptionEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'en'
        );
        return descriptionEntry ? descriptionEntry.flavor_text.replace(/\f/g, ' ') : 'No description available';
    } catch (error) {
        console.error('Error fetching Pokemon description:', error);
        return 'No description available';
    }
};

// Export a function to get random Pokemon
export const getRandomPokemon = async () => {
    // Get a random Pokemon ID (1-151 for Gen 1)
    const randomId = Math.floor(Math.random() * 151) + 1;
    return await pokedex.getPokemonById(randomId);
};
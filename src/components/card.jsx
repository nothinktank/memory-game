import { useState } from "react";
import { getPokemonByName, getPokemonDescription, getItemByName } from "../data/pokemon-api";

export function Card ({imgLink, iconLink, desc, onClick}) {
    const capitalizedDesc = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
        return str; // Handle empty strings or non-string inputs
      }

      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
        <div className="card" onClick={onClick}>
            <img src={imgLink} alt="" />
            <p className="description"><img src={iconLink} alt="" />{capitalizedDesc(desc)}</p>
        </div>
        </>
    )
}

export function createCard(img, desc, icon) {
    return {
        //probably need an id of some kind
        img, 
        desc, 
        icon,
        clickCount: 0,
    }
}

//function to fetch pokeball
async function fetchPokeball() {
    try {
        const pokeballObject = await getItemByName(2);
        console.log(pokeballObject);
    } catch (error) {
        console.error(`Error fetching pokeball:`, error);
    }
}

// fetchPokeball();

const pokemonList = [
    {pokemon:'pikachu', pokeball:'master-ball'}, 
    {pokemon:'gengar', pokeball:'ultra-ball'},
    {pokemon:'mewtwo', pokeball:'great-ball'}, 
    {pokemon:'mew', pokeball:'poke-ball'}, 
    {pokemon:'dragonite', pokeball:'safari-ball'}, 
    {pokemon:'salamence', pokeball:'net-ball'},
    {pokemon:'greninja', pokeball:'dive-ball'},
    {pokemon:'rayquaza', pokeball:'nest-ball'},
    {pokemon:'latios', pokeball:'repeat-ball'},
    {pokemon:'latias', pokeball:'timer-ball'},
    {pokemon:'charizard', pokeball:'great-ball'},
    {pokemon:'psyduck', pokeball:'master-ball'}];

// Function to create cards asynchronously
async function createPokemonCards() {
    const cardDeck = [];
    
    for (let i = 0; i < pokemonList.length; i++) {
        try {
            console.log(pokemonList[i])
            const pokemonObject = await getPokemonByName(pokemonList[i].pokemon);
            const pokeballIcon = await getItemByName(pokemonList[i].pokeball)
            console.log(pokemonObject.name);
            console.log(pokeballIcon);
            // const desc = await getPokemonDescription(pokemonList[i]); // Get actual description
            const desc = pokemonObject.name;
            const img = pokemonObject.sprites.front_default;
            const icon = pokeballIcon.sprites.default;
            cardDeck.push(createCard(img, desc, icon));
        } catch (error) {
            console.error(`Error fetching ${pokemonList[i]}:`, error);
            // Add fallback card
            cardDeck.push(createCard('placeholder', pokemonList[i]));
        }
    }
    
    return cardDeck;
}

// Export the function to create cards
export { createPokemonCards, fetchPokeball };
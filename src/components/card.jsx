import { useState } from "react";
import { getPokemonByName, getPokemonDescription } from "../data/pokemon-api";

export function Card ({imgLink, desc, onClick}) {
    return (
        <>
        <div className="card" onClick={onClick}>
            <div className="image"><img src={imgLink} alt="" /></div>
            <div className="description">{desc}</div>
        </div>
        </>
    )
}

export function createCard(img, desc) {
    return {
        //probably need an id of some kind
        img, 
        desc, 
        clickCount: 0,
    }
}


const pokemonList = [
    'pikachu', 
    'gengar', 
    'mewtwo', 
    'mew', 
    'dragonite', 
    'salamence',
    'greninja',
    'rayquaza',
    'latios',
    'latias',
    'charizard',
    'psyduck'];

// Function to create cards asynchronously

// async function create

async function createPokemonCards() {
    const cardDeck = [];
    
    for (let i = 0; i < pokemonList.length; i++) {
        try {
            const pokemonObject = await getPokemonByName(pokemonList[i]);
            console.log(pokemonObject.name);
            // const desc = await getPokemonDescription(pokemonList[i]); // Get actual description
            const desc = pokemonObject.name;
            const img = pokemonObject.sprites.front_default;
            cardDeck.push(createCard(img, desc));
        } catch (error) {
            console.error(`Error fetching ${pokemonList[i]}:`, error);
            // Add fallback card
            cardDeck.push(createCard('placeholder', pokemonList[i]));
        }
    }
    
    return cardDeck;
}

// Export the function to create cards
export { createPokemonCards };
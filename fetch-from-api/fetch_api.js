const section = document.getElementById("pokemons");

const url = "https://pokeapi.co/api/v2/pokemon/"



// Hämta pokemons från Pokemon API 
async function getPokemons() {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data.results;

    } catch(error) {
        console.log(error);
    }

}

async function getPokemonDetails(pokemonName) {
    try {
        const response = await fetch(`${url}/${pokemonName}`);

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data;

    } catch(error) {
        console.log(error);
    }

}



// Visa alla pokemons i en lista
async function displayCardPokemons() {

    const pokemons = await getPokemons();

    for(const pokemon of pokemons) {
    
        const card = document.createElement("article");
        card.classList.add("pokemon-card");
        card.textContent = pokemon.name;
        section.appendChild(card);

        const pokemonDetails = await getPokemonDetails(pokemon.name);
        console.log(pokemonDetails)

        const image = document.createElement("img");
        image.src = pokemonDetails.sprites.front_default;
        card.appendChild(image)
    }

}

displayCardPokemons();


// Hämta ytterligare info från varje pokement (fetch url:en per pokemon)




// Visa alla pokemons detaljer


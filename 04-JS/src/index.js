const pokeNames = document.querySelector('[data-poke-name]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');


/* fetchPokemon: funcion principal de la pokedex, aqui nos conectamos a la API */
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            renderNotFound()
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            const { stats, types } = data;
            pokeNames.textContent = data.name;
            pokeId.textContent = `N° ${data.id}`;
            renderPokemonTypes(types);
            renderPokemonStats(stats);
        }
    })
}

/* renderPokemonTypes: este metodo nos entrega el tipo o tipos del pokemon */
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

/* renderPokemonStats: este metodo nos entrega las estadisticas del pokemon */
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}
/* pokeImage: funcion que nos ayuda a modificar la imagen del html con datos de la API */
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

/* renderNotFound: funcion que nos ayuda a renderizar un mensaje de error cuando 
no se encuentra el pokemon */
const renderNotFound = () => {
    pokeNames.textContent = 'Error';
    pokeImage('./src/img/error.png');
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}
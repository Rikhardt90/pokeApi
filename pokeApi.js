const getPokemon = async () => {
  for (let i = 1; i < 152; i++) {
    const pokemonApi = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    const pokemonRes = await pokemonApi.json();

    const {
      name: pokeName,
      id: pokeId,
      height: pokeHeight,
      weight: pokeWeight,
      types,
      abilities,
      sprites,
    } = pokemonRes;

    const [
      {
        type: { name: pokeType1 },
      },
    ] = types;

    const [
      {
        ability: { name: pokeAbility },
      },
    ] = abilities;

    const {
      versions: {
        "generation-v": {
          "black-white": {
            animated: { front_default: pokeImg },
          },
        },
      },
    } = sprites;

    if (pokeType1 === "bug") {
      pokeBg = "./assets/img/bug-bg.jpg";
    } else if (pokeType1 === "dragon") {
      pokeBg = "./assets/img/dragon-bg.jpg";
    } else if (pokeType1 === "fighting") {
      pokeBg = "./assets/img/fighting-bg.jpg";
    } else if (pokeType1 === "fire") {
      pokeBg = "./assets/img/fire-bg.jpg";
    } else if (pokeType1 === "flying") {
      pokeBg = "./assets/img/flying-bg.jpg";
    } else if (pokeType1 === "ghost") {
      pokeBg = "./assets/img/ghost-bg.jpg";
    } else if (pokeType1 === "grass") {
      pokeBg = "./assets/img/grass-bg.jpg";
    } else if (pokeType1 === "ground") {
      pokeBg = "./assets/img/ground-bg.jpg";
    } else if (pokeType1 === "ice") {
      pokeBg = "./assets/img/ice-bg.jpg";
    } else if (pokeType1 === "normal") {
      pokeBg = "./assets/img/normal-bg.jpg";
    } else if (pokeType1 === "poison") {
      pokeBg = "./assets/img/poison-bg.jpg";
    } else if (pokeType1 === "psychic") {
      pokeBg = "./assets/img/psy-bg.jpg";
    } else if (pokeType1 === "rock") {
      pokeBg = "./assets/img/rock-bg.jpg";
    } else if (pokeType1 === "electric") {
      pokeBg = "./assets/img/electric-bg.jpg";
    } else if (pokeType1 === "water") {
      pokeBg = "./assets/img/water-bg.jpg";
    } else if (pokeType1 === "fairy") {
      pokeBg = "./assets/img/fairy-bg.jpg";
    }

    div$$ = document.createElement("section");

    div$$.innerHTML = `<div class="divName"><h2>#${pokeId} ${pokeName.toUpperCase()}</h2></div>

            <div class="divImg" style="background-image: url(${pokeBg})"><img src="${pokeImg}"/></div>
            
            <div class="divAbility"><h3>Habilidad: ${pokeAbility}</h3></div>
            <div class="divText">
            <h3>Altura: ${pokeHeight}0 cm</h3> <h3>Peso: ${pokeWeight}g</h3>
            </div>`;

    document.body.appendChild(div$$);
  }
};

getPokemon();

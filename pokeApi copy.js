for (let i = 1; i < 152; i++) {
  
  fetch("https://pokeapi.co/api/v2/pokemon/" + [i])
    .then((response) => response.json())
    .then((pokemonsList) => {

      const {name: pokeName,id: pokeId,height: pokeHeight,weight: pokeWeight,types,abilities, sprites} = pokemonsList;

      const [{type:{name : pokeType1}},{type:{name : pokeType2}}] = types;

      const [{ability:{name : pokeAbility}}] = abilities;

      const {versions:{'generation-v':{'black-white':{animated:{'front_default': pokeImg}}}}} = sprites;



      div$$ = document.createElement("div");

      div$$.innerHTML = `<h2>#${pokeId} ${pokeName.toUpperCase()}</h2>
      <img src="${pokeImg}"/>
      <h3>Habilidad: ${pokeAbility}</h3>
      <div class="divText">
      <h3>Altura: ${pokeHeight}0 cm</h3> <h3>Peso: ${pokeWeight}g</h3>
      </div>`;
      
      document.body.appendChild(div$$);


      
    });
}
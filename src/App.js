import React, { useState, useEffect } from "react";
import Api from "./services/api.js";
import CardPokemon from "./components/Card/index";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    Api.get("1")
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.log("Não foi possível fazer a requisição" + err);
      });
  }, []);

  return (
    <div>
      {pokemon.abilities
        ? pokemon.abilities.map((item, index) => (
            <CardPokemon
              key={index}
              name={item.ability.name}
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            />
          ))
        : "Loading..."}
    </div>
  );
}

export default App;

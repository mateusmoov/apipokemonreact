import React, { useState, useEffect } from "react";
import Api from "./services/api.js";
import CardPokemon from "./components/Card/index";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    Api.get(`25`)
      .then((response) => setPokemon(response.data))
      .catch((err) => {
        console.log("Não foi possível fazer a requisição" + err);
      });
  }, []);

  return (
    <div>
      {pokemon.abilities
        ? pokemon.abilities
            .filter((elem, index) => index < 1)
            .map((item, index) => {
              console.log(pokemon.sprites);
              return (
                <CardPokemon
                  key={index}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                />
              );
            })
        : "Loading..."}
    </div>
  );
}

export default App;

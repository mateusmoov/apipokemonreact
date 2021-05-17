import React, { useState, useEffect } from "react";
import Api from "./services/api.js";
import CardPokemon from "./components/Card/index";
import Input from "./components/Input/index";

function App() {
  // const [pokemon, setPokemon] = useState([]);
  // useEffect(() => {
  //   for (let i = 1; i < 20; i++) {
  //     Api.get(`${i}`)
  //       .then((response) =>
  //         setPokemon((oldPokemon) => [...oldPokemon, response.data])
  //       )
  //       .catch((err) => {
  //         console.log("Não foi possível fazer a requisição" + err);
  //       });
  //   }
  // }, []);
  // return (
  //   <div>
  //     {pokemon.length > 0
  //       ? pokemon.map((item, index) => {
  //           return (
  //             <CardPokemon
  //               key={index}
  //               name={item.name}
  //               sprite={item.sprites.front_default}
  //               BackgroundImage={item.sprites.front_default}
  //             />
  //           );
  //         })
  //       : "Loading..."}
  //   </div>
  // );
  return <Input />;
}

export default App;

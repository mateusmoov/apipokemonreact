import Api from "../../services/api";
import CardPokemon from "../../components/Card/index";
import Input from "../../components/Input";
import { useState, useEffect, useContext } from "react";
import * as S from "./styles.js";
import { MyContext } from "../../context/PokemonContext";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const pokemon = useContext(MyContext);

  useEffect(() => {
    for (let i = 1; i <= 21; i++) {
      Api.get(`${i}`)
        .then((response) =>
          setPokemonList((oldPokemon) => [...oldPokemon, response.data])
        )
        .catch((err) => {
          console.log("Não foi possível fazer a requisição" + err);
        });
    }
  }, []);

  const lowerPokemonName = pokemon.pokemonName.toLowerCase();

  const pokemonFiltered = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(lowerPokemonName)
  );

  return (
    <S.ContainerHome>
      <S.AlgumacoisaWrapper>
        <S.Title>Olá!</S.Title>
        <S.Subtitle>Seja bem vindo a central de Pokemons!</S.Subtitle>
        <Input />
      </S.AlgumacoisaWrapper>
      <S.ContainerCard>
        <S.Card>
          {pokemonFiltered.map((item, index) => {
            return (
              <CardPokemon
                key={index}
                name={item.name}
                sprite={item.sprites.front_default}
                BackgroundImage={item.sprites.front_default}
              />
            );
          })}
        </S.Card>
      </S.ContainerCard>
    </S.ContainerHome>
  );
};

export default Home;

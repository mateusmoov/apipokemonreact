import Api from "../../services/api";
import CardPokemon from "../../components/Card/index";
import Input from "../../components/Input";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context/PokemonContext";
import useDebounce from "../../hooks/debounced.js";
import * as S from "./styles.js";

const Home = () => {
  // Request Card API
  const [pokemonList, setPokemonList] = useState([]);
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

  // Request Card Input
  const pokemon = useContext(MyContext);
  const [pokemonCard, setPokemonCard] = useState();
  const inputDebounce = useDebounce(pokemon.pokemonName, 500);

  useEffect(() => {
    pokemon.pokemonName &&
      Api.get(`${pokemon.pokemonName}`)
        .then((response) => setPokemonCard(response.data))
        .catch((err) => {
          console.log("Não foi possível fazer a requisição" + err);
        });
  }, [inputDebounce]);

  return (
    <S.ContainerHome height={!pokemon.pokemonName ? "100%" : "100vh"}>
      <S.AlgumacoisaWrapper>
        <S.Title>Olá!</S.Title>
        <S.Subtitle>Seja bem vindo a central de Pokemons!</S.Subtitle>
        <Input />
      </S.AlgumacoisaWrapper>
      <S.ContainerCard>
        {!pokemon.pokemonName ? (
          <S.Card>
            {pokemonList.length > 0
              ? pokemonList.map((item, index) => {
                  return (
                    <CardPokemon
                      key={index}
                      name={item.name}
                      sprite={item.sprites.front_default}
                      BackgroundImage={item.sprites.front_default}
                    />
                  );
                })
              : "Loading..."}
          </S.Card>
        ) : (
          <S.Card>
            {pokemonCard ? (
              <CardPokemon
                name={pokemonCard.name}
                sprite={pokemonCard.sprites?.front_default}
                BackgroundImage={pokemonCard.sprites?.front_default}
              />
            ) : (
              console.log("carregando")
            )}
          </S.Card>
        )}
      </S.ContainerCard>
    </S.ContainerHome>
  );
};

export default Home;

import Api from "../../services/api";
import CardPokemon from "../../components/Card/index";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { useState, useEffect, useContext } from "react";
import * as S from "./styles.js";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 21; i++) {
      Api.get(`${i}`)
        .then((response) =>
          setPokemon((oldPokemon) => [...oldPokemon, response.data])
        )
        .catch((err) => {
          console.log("Não foi possível fazer a requisição" + err);
        });
    }
  }, []);

  return (
    <S.ContainerHome>
      <S.AlgumacoisaWrapper>
        <S.Title>Olá!</S.Title>
        <S.Subtitle>Seja bem vindo a central de Pokemons!</S.Subtitle>
        <Input />
      </S.AlgumacoisaWrapper>
      <S.ContainerCard>
        <S.Card>
          {pokemon.length > 0
            ? pokemon.map((item, index) => {
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
      </S.ContainerCard>
    </S.ContainerHome>
  );
};

export default Home;

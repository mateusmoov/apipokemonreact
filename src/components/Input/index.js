import React from "react";
import * as S from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Api from "../../services/api.js";
import CardPokemon from "../Card/index";
const Input = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    pokemonName &&
      Api.get(`${pokemonName}`)
        .then((response) => setPokemon(response.data))
        .catch((err) => {
          console.log("Não foi possível fazer a requisição" + err);
        });
  }, [pokemonName]);

  return (
    <S.SectionInput>
      <S.ContainerInput>
        <form action="">
          <div>
            <S.Input
              placeholder="Encontre seu pokémon"
              name="pokemonName"
              value={pokemonName}
              onChange={(e) => {
                setPokemonName(e.target.value);
              }}
            />
            <S.SearchIcon>
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </S.SearchIcon>
          </div>
        </form>
      </S.ContainerInput>
      <div>
        {pokemon ? (
          <CardPokemon
            name={pokemon.name}
            sprite={pokemon.sprites?.front_default}
            BackgroundImage={pokemon.sprites?.front_default}
          />
        ) : (
          console.log("carregando")
        )}
      </div>
    </S.SectionInput>
  );
};

export default Input;

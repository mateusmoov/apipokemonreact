import React, { useContext } from "react";
import * as S from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../../context/PokemonContext";

const Input = () => {
  const pokemon = useContext(MyContext);

  return (
    <S.SectionInput>
      <S.ContainerInput>
        <div>
          <S.Input
            placeholder="Encontre seu pokémon"
            name="pokemonName"
            value={pokemon.pokemonName}
            onChange={(e) => pokemon.setPokemonName(e.target.value)}
          />
          <S.SearchIcon>
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          </S.SearchIcon>
        </div>
      </S.ContainerInput>
    </S.SectionInput>
  );
};

export default Input;

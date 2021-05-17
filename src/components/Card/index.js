import { Palette } from "react-palette";
import * as S from "./styles.js";

const CardPokemon = ({ BackgroundImage, name, sprite }) => {
  return (
    <Palette src={BackgroundImage}>
      {({ data }) => (
        <S.Card inputColor={data.lightMuted}>
          <S.PokemonName>{name}</S.PokemonName>
          <S.PokemonImage>
            <img src={sprite} height="190" alt="pokemon" />
          </S.PokemonImage>
        </S.Card>
      )}
    </Palette>
  );
};

export default CardPokemon;

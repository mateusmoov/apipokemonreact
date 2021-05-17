import { Palette } from "react-palette";
import * as S from "./styles.js";

const CardPokemon = ({ BackgroundImage, name, sprite }) => {
  return (
    <S.ContainerCard>
      <Palette src={BackgroundImage}>
        {({ data }) => (
          <S.Card inputColor={data.vibrant}>
            <S.PokemonName>{name}</S.PokemonName>
            <S.PokemonImage>
              <img src={sprite} height="190" alt="pokemon" />
            </S.PokemonImage>
          </S.Card>
        )}
      </Palette>
    </S.ContainerCard>
  );
};

export default CardPokemon;

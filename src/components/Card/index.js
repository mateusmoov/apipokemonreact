import { Palette } from "react-palette";
import * as S from "./styles.js";

const CardPokemon = ({ image, name }) => {
  return (
    <Palette src={image}>
      {({ data }) => (
        <S.Card inputColor={data.vibrant}>
          <S.PokemonName>{name}</S.PokemonName>
        </S.Card>
      )}
    </Palette>
  );
};

export default CardPokemon;

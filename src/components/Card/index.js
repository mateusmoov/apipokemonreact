import ImagePalette from "react-image-palette";
import * as S from "./styles.js";

const CardPokemon = ({ name, image }) => {
  return (
    <ImagePalette image={image}>
      {({ alternativeColor }) => (
        <S.Card inputColor={alternativeColor}>
          <S.PokemonName>{name}</S.PokemonName>
        </S.Card>
      )}
    </ImagePalette>
  );
};

export default CardPokemon;

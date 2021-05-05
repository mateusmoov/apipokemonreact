import * as S from "./styles.js";

const CardPokemon = ({ name }) => {
  return (
    <S.Card>
      <S.PokemonName>{name}</S.PokemonName>
    </S.Card>
  );
};

export default CardPokemon;

import * as S from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  return (
    <S.ContainerInput>
      <S.Input placeholder="Encontre seu pokémon" />
      <FontAwesomeIcon icon={faSearch} className="searchIcon" />
    </S.ContainerInput>
  );
};

export default Input;

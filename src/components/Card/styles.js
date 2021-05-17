import styled from "styled-components";

export const Card = styled.div`
  width: 314px;
  height: 318px;
  background-color: ${(props) => props.inputColor};
  border-radius: 15px;
  margin: 80px;
`;

export const PokemonName = styled.div`
  font-size: 24px;
  color: white;
  font-family: Montserrat;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-top: 43px;
  text-transform: capitalize;
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
`;

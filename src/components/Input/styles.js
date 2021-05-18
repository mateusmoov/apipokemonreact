import styled from "styled-components";

export const SectionInput = styled.div``;

export const ContainerInput = styled.div`
  position: relative;
  width: 773px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  background-color: #6a707a;
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 20px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  color: white;
  padding-left: 25px;

  ::placeholder {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

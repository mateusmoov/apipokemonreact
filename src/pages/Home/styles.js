import styled from "styled-components";

export const ContainerHome = styled.div`
  height: 100%;
  background-color: #36393f;
`;

export const AlgumacoisaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-auto-rows: auto;
  grid-gap: 80px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 10px;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

export const Subtitle = styled.h1`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 400;
  color: white;
  margin-bottom: 31px;
`;

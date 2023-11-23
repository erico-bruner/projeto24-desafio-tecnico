import styled from "styled-components";
import Menu from "../components/Menu";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";

export default function ChartPage() {
  const city = useContext(CityContext);

  return (
    <Container>
      <Menu />
      <Content>Cidade: {city.city}</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 65vw;
  height: 100vh;
  background: #efefef;
`;

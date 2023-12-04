import styled from "styled-components";
import Menu from "../components/Menu";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";

export default function ChartPage() {
  const { city } = useContext(CityContext);

  return (
    <Container>
      <Menu />
      <Content>
        {city ? (
          <>
            <Navbar />
            <SCCityName>
              <h1>{city?.name}</h1>
              <span>
                Lat: {city?.coord.lat.toFixed(2)} Long:{" "}
                {city?.coord.lon.toFixed(2)}
              </span>
            </SCCityName>
            <Chart />
          </>
        ) : (
          <span>
            Digite o nome de uma cidade no campo para ver as informações!
          </span>
        )}
        <SCFooterMessage>
          Dados fornecidos pela
          <SCLink to={"https://openweathermap.org/"}> Open Weather API</SCLink>
        </SCFooterMessage>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.61vw;
  width: 65vw;
  height: 100vh;
  background: #efefef;

  > span {
    color: #afadad;
    font-style: italic;
    font-weight: 400;
    font-size: 1.25vw;

    @media (max-width: 767px) {
      font-size: 6vw;
    }
  }

  @media (max-width: 767px) {
    width: 100vw;
    height: auto;
    gap: 12vw;
    padding: 5vw;
  }
`;

const SCFooterMessage = styled.footer`
  color: #222;
  font-weight: 400;
  font-size: 1.25vw;

  @media (max-width: 767px) {
    font-size: 4.3vw;
  }
`;

const SCLink = styled(Link)`
  color: #96a7f2;
  text-decoration: none;
`;

const SCCityName = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: #222;
    font-weight: 400;
    font-size: 7.84vw;

    @media (max-width: 767px) {
      font-size: 15vw;
    }
  }

  > span {
    font-weight: 400;
    color: #222;
    font-size: 1.25vw;

    @media (max-width: 767px) {
      font-size: 4.5vw;
    }
  }
`;

import styled from "styled-components";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function DashboardPage() {
  const { city } = useContext(CityContext);

  if (!city) {
    return (
      <Container>
        <Menu />
        <Content>
          <span>
            Digite o nome de uma cidade no campo para ver as informações!
          </span>
          <SCFooterMessage>
            Dados fornecidos pela
            <SCLink to={"https://openweathermap.org/"}>
              {" "}
              Open Weather API
            </SCLink>
          </SCFooterMessage>
        </Content>
      </Container>
    );
  }

  const TakeACoat =
    city?.main.temp < 17 ||
    city?.main.temp_min < 17 ||
    city?.main.temp_max < 17;

  return (
    <Container>
      <Menu />
      <Content>
        <Navbar />

        <SCCityName>
          <h1>{city?.name}</h1>
          <span>
            Lat: {city?.coord.lat.toFixed(2)} Long: {city?.coord.lon.toFixed(2)}
          </span>
        </SCCityName>

        <SCCardGroup>
          <Card title="Miníma" value={`${Math.round(city.main.temp_min)}° C`} />
          <Card title="Máxima" value={`${Math.round(city.main.temp_max)}° C`} />
          <Card title="Umidade" value={`${city.main.humidity}%`} />
          <Card title="Velocidade do vento" value={`${city.wind.speed} m/s`} />
        </SCCardGroup>

        <span>
          {TakeACoat
            ? "Sim, você deve levar um casaquinho!"
            : "Não, você não deve levar um casaquinho!"}
        </span>

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
    width: 100%;
    min-height: 80vh;
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

const SCCardGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 3vh;

  @media (max-width: 767px) {
    flex-direction: column;
  }
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

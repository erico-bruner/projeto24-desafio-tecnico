import { useContext } from "react";
import styled from "styled-components";
import CityContext from "../contexts/CityContext";
import { hashColor } from "../utils/colors";
import { SCTemperatureProps } from "../protocols";

export default function Weather() {
  const { city } = useContext(CityContext);

  return (
    <Container>
      {city && (
        <>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt={`${city.weather[0].main} icon`}
            />
            <SCTemperature main={city.weather[0].main}>
              {Math.round(city.main.temp)}
              <span>°C</span>
            </SCTemperature>
          </div>
          <span>{city.weather[0].description}</span>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.73vw;
  padding-bottom: 4vh;
  border-bottom: 5px solid #ededed;

  @media (max-width: 767px) {
    padding-bottom: 3vh;
    padding-top: 3vh;
    width: 100%;
  }

  > span {
    margin-top: 4vh;
    font-weight: 400;
    font-size: 1.68vw;
    color: #222;
    text-transform: capitalize;

    @media (max-width: 767px) {
      font-size: 6vw;
      margin-top: 2vh;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      width: 7.84vw;
      height: 7.84vw;

      @media (max-width: 767px) {
        width: 22vw;
        height: 22vw;
      }
    }
  }
`;

const SCTemperature = styled.h1<SCTemperatureProps>`
  display: flex;
  font-weight: 300;
  font-size: 7.84vw;
  color: ${({ main }) => hashColor[main]};

  @media (max-width: 767px) {
    font-size: 22vw;
  }

  > span {
    font-size: 6.26vw;

    @media (max-width: 767px) {
      font-size: 16vw;
    }
  }
`;

import { useContext } from "react";
import styled from "styled-components";
import CityContext from "../contexts/CityContext";

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
            <SCTemperature>
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

  > span {
    margin-top: 4vh;
    font-weight: 400;
    font-size: 1.68vw;
    color: #222;
    text-transform: capitalize;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
      width: 7.84vw;
      height: 7.84vw;
    }
  }
`;

const SCTemperature = styled.h1`
  display: flex;
  font-weight: 300;
  font-size: 7.84vw;

  > span {
    font-size: 6.26vw;
  }
`;

import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import CityContext from "../contexts/CityContext";
import axios from "axios";
import { GeocodingApiResProps, OpenWeatherMapApiResProps } from "../protocols";

export default function Input() {
  const [input, setInput] = useState("");
  const { setCity } = useContext(CityContext);

  async function handleSearchCity() {
    try {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
      const geocodingApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`;

      const { data } = await axios.get<GeocodingApiResProps[]>(geocodingApiUrl);
      const { lat, lon } = data[0];

      const openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${apiKey}`;
      const respOpen = await axios.get<OpenWeatherMapApiResProps>(
        openWeatherMapApiUrl
      );

      setCity(respOpen.data);
      console.log(respOpen.data);
      setInput(respOpen.data.name);
    } catch (error) {
      console.error("Erro ao obter coordenadas:", error);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSearchCity();
    }
  }

  return (
    <Container>
      <button onClick={() => handleSearchCity()}>
        <SCSearchIcon />
      </button>

      <SCInput
        placeholder="Procure por uma cidade"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ededef;
  width: 26.14vw;
  height: 7.46vh;
  border-radius: 2.24vh;
  border: none;
  padding-left: 1.05vw;
  padding-right: 1.05vw;
  gap: 0.52vw;
  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

  > button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const SCSearchIcon = styled(CiSearch)`
  font-size: 2vw;
`;

const SCInput = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: #424243;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.15vw;

  &::placeholder {
    color: #424243;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.15vw;
  }
`;

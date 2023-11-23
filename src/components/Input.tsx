import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import CityContext from "../contexts/CityContext";

export default function Input() {
  const { city, setCity } = useContext(CityContext);

  return (
    <Container>
      <SCSearchIcon />
      <SCInput
        placeholder="Procure por uma cidade"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
`;

const SCSearchIcon = styled(CiSearch)`
  cursor: pointer;
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

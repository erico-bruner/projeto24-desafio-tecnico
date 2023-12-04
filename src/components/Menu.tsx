import styled from "styled-components";
import Logo from "./Logo";
import Input from "./Input";
import Weather from "./Weather";
import Dates from "./Dates";

export default function Menu() {
  return (
    <Container>
      <Logo />
      <Input />
      <Weather />
      <Dates />

      {/*<SwitchGroup>
        <Switch text="°F" checked={fahrenheit} setChecked={setFahrenheit} />
        <Switch text="Dark Mode" checked={darkMode} setChecked={setDarkMode} />
      </SwitchGroup>*/}

      <SCFooterMessage>Todos os direitos reservados. 2023.</SCFooterMessage>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 35vw;
  height: 100vh;
  background: #ffffff;
  padding: 2.61vw;

  @media (max-width: 767px) {
    width: 100vw;
    height: auto;
    padding: 5vw;
    gap: 2.5vh;
  }
`;

const SCFooterMessage = styled.footer`
  color: #222;
  font-weight: 400;
  font-size: 1.25vw;

  @media (max-width: 767px) {
    display: none;
  }
`;

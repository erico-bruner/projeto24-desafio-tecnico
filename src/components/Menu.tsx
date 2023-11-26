import styled from "styled-components";
import Logo from "./Logo";
import Input from "./Input";
import Weather from "./Weather";
import Switch from "./Switch";
import { useState } from "react";
import Dates from "./Dates";

export default function Menu() {
  const [fahrenheit, setFahrenheit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <Logo />
      <Input />
      <Weather />
      <Dates />
      <SwitchGroup>
        <Switch text="°F" checked={fahrenheit} setChecked={setFahrenheit} />
        <Switch text="Dark Mode" checked={darkMode} setChecked={setDarkMode} />
      </SwitchGroup>
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
`;

const SCFooterMessage = styled.footer`
  color: #222;
  font-weight: 400;
  font-size: 1.25vw;
`;

const SwitchGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

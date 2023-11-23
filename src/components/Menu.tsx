import styled from "styled-components";
import Logo from "./Logo";

export default function Menu() {
  return (
    <Container>
      <Logo />

      <SCInput placeholder="Procure por uma cidade" />

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

const SCInput = styled.input`
  width: 26.14vw;
  height: 7.46vh;
  border-radius: 2.24vh;
  border: none;
  background: #ededef;
  padding-left: 1.05vw;
  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

  &::placeholder {
    color: #424243;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.15vw;
  }
`;

const SCFooterMessage = styled.footer`
  color: #222;
  font-weight: 400;
  font-size: 1.25vw;
`;

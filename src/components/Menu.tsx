import styled from "styled-components";
import Logo from "./Logo";
import Input from "./Input";

export default function Menu() {
  return (
    <Container>
      <Logo />

      <Input />
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

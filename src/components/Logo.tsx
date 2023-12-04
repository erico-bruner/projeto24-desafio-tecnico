import styled from "styled-components";

import logoImage from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Container>
      <SCImage src={logoImage} alt="Logo" />
      <SCTitle>Levo um casaquinho?</SCTitle>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.73vw;
`;

const SCImage = styled.img`
  width: 6.26vw;

  @media (max-width: 767px) {
    width: 17vw;
  }
`;

const SCTitle = styled.h1`
  font-weight: 600;
  font-size: 3.24vw;

  @media (max-width: 767px) {
    font-size: 10vw;
  }
`;

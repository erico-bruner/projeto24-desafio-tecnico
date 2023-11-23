import styled from "styled-components";
import Menu from "../components/Menu";

export default function ChartPage() {
  return (
    <Container>
      <Menu />
      <Content>ChartPage</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 65vw;
  height: 100vh;
  background: #efefef;
`;

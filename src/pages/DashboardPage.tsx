import styled from "styled-components";
import Menu from "../components/Menu";

export default function DashboardPage() {
  return (
    <Container>
      <Menu />
      <Content>DashboardPage</Content>
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <SCNav>
      <SCLink to={"/"} isActive={location.pathname === "/"}>
        Hoje
      </SCLink>
      <SCLink to={"/chart"} isActive={location.pathname === "/chart"}>
        Próximos dias
      </SCLink>
    </SCNav>
  );
}

const SCNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 3.66vw;

  @media (max-width: 767px) {
    gap: 10vw;
  }
`;

const SCLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#222" : "#c8c8c8")};
  font-size: 2.51vw;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 7vw;
  }
`;

import { format, getDay } from "date-fns";
import styled from "styled-components";

export default function Dates() {
  const weekday = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const currentDate = new Date();
  const shortDate = format(currentDate, "MM/dd/yyyy");
  const hour = format(currentDate, "HH:mm");

  return (
    <Container>
      <time>{shortDate}</time>
      <time>
        {weekday[getDay(currentDate)]}, {hour}
      </time>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1vh;

  @media (max-width: 767px) {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
`;

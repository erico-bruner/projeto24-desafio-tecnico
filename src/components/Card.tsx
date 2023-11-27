import styled from "styled-components";
import { CardProps } from "../protocols";

export default function Card({ title, value }: CardProps) {
  return (
    <SCContainer>
      <h1>{title}</h1>
      <span>{value}</span>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  width: 26.14vw;
  height: 16.79vh;
  border-radius: 2.99vh;
  background: linear-gradient(117deg, #4d4494 22.83%, #4f43ae 90.03%);
  padding-left: 2.35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  > h1 {
    color: #fff;
    font-weight: 700;
    font-size: 1.15vw;
  }

  > span {
    font-weight: 600;
    color: #fff;
    font-size: 2.51vw;
  }
`;

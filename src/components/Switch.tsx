import ReactSwitch from "react-switch";
import styled from "styled-components";
import { SwitchProps } from "../protocols";

export default function Switch({ text, checked, setChecked }: SwitchProps) {
  function handleChange(c: boolean) {
    setChecked(c);
  }

  return (
    <Container>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <span>{text}</span>
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 13vw;
  gap: 2.09vw;

  > span {
    color: #222;
    font-weight: 400;
    font-size: 1.25vw;
  }
`;

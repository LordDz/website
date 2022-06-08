import { useState } from "react";
import styled from "styled-components";

interface ITenzieButton {
  number: number;
  index: number;
  onClickCallback: Function;
}

interface IStyledButton {
  isFrozen: boolean;
}

const StyledButton = styled.button<IStyledButton>`
  background-color: ${(props) => (props.isFrozen ? "green" : "white")};
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 15%);
  display: flex;
  width: 48px;
  height: 48px;
  border: ${(props) => (props.isFrozen ? "none" : "2px solid black")};

  label {
    margin: auto;
  }
`;

export const TenzieButton: React.FC<ITenzieButton> = ({
  index,
  number,
  onClickCallback,
}) => {
  const [isFrozen, setIsFrozen] = useState(false);

  const onClickButton = () => {
    const frozenReverse = !isFrozen;
    setIsFrozen(frozenReverse);
    onClickCallback(index, frozenReverse);
  };

  return (
    <StyledButton onClick={onClickButton} isFrozen={isFrozen}>
      <label>{number}</label>
    </StyledButton>
  );
};

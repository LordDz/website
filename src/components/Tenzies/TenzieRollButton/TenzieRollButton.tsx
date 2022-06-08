import styled from "styled-components";
import { MouseEventHandler } from "react";

interface ITenzieRollButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface IStyledButton {}

const StyledButton = styled.button<IStyledButton>`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 15%);
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  label {
    margin: auto;
  }
`;

export const TenzieRollButton: React.FC<ITenzieRollButton> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <label>Roll</label>
    </StyledButton>
  );
};

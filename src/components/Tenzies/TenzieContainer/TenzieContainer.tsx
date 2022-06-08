import styled from "styled-components";
import { TenzieLogic } from "../TenzieLogic/TenzieLogic";
import { TenzieRollButton } from "../TenzieRollButton/TenzieRollButton";

interface ITenzieContainer {}

interface IStyledDiv {}

const StyledDiv = styled.div<IStyledDiv>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2px;
  width: 340px;
  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;

  * {
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    display: flex;
  }
`;

export const TenzieContainer: React.FC<ITenzieContainer> = ({}) => {
  return (
    <StyledDiv>
      <h1>Tenzies</h1>
      <label>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </label>
      <TenzieLogic nrOfButtonsPerRow={6} nrOfRows={2} />
    </StyledDiv>
  );
};

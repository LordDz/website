import styled from "styled-components";

interface ITurnboard {}

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

export const Turnboard: React.FC<ITurnboard> = ({}) => {
  return (
    <StyledDiv>
      <label>
        This is a turnboard, there are many like them, but this one is mine.
      </label>
    </StyledDiv>
  );
};

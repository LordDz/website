import styled from "styled-components";

export interface IJTooltip {
  title: string;
  description: string;
}

interface IStyled {}

const StyledDiv = styled.div<IStyled>`
  grid-column: 1;
  grid-row: 1;

  color: white;

  .tooltip {
    visibility: hidden;
    background: black;
    border: none;
    position: absolute;
    display: flex;

    width: 200px;
    height: 200px;
    margin-left: 100px;
    margin-bottom: 300px;
    border-radius: 6px;

    h3 {
    }

    span {
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

export const JTooltip: React.FC<IJTooltip> = ({ title, description }) => {
  return (
    <StyledDiv>
      <div className="tooltip">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </StyledDiv>
  );
};

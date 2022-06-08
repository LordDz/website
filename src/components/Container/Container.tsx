import "./Style.css";
import styled from "styled-components";

export interface IContainer {
  title: string;
  text: string;
  index: number;
  opacity: number;
}

interface IStyledContainer {
  index: number;
  opacity: number;
}

const StyledContainer = styled.div<IStyledContainer>`
  opacity: ${(props) => props.opacity || -1};
`;

export const Container: React.FC<IContainer> = ({
  title,
  text,
  index,
  opacity,
}) => {
  return (
    <StyledContainer index={index} opacity={opacity}>
      <h1>{title}</h1>
      <span>{text}</span>
    </StyledContainer>
  );
};

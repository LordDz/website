import React, { useEffect, useState } from "react";
import _ from "lodash";
import styled from "styled-components";
/*A fixed page with a scrollbar, shows each container depending on how far the scroll is*/

export interface IScreenie {
  path: string;
  alt: string;
}

interface IProps {
  screenshots: Array<IScreenie>;
}

interface IStyledScreenshots {
  amountOfScreenshots: number;
}

const StyledScreenshots = styled.div<IStyledScreenshots>`
  display: grid;
  grid-gap: 20px;
  margin-top: 200px;
  grid-template-columns: repeat(
    ${(props) => props.amountOfScreenshots / 2 || 0},
    200px
  );
`;

export const Screenshots: React.FC<IProps> = (props) => {
  return (
    <main>
      <StyledScreenshots amountOfScreenshots={props.screenshots.length}>
        {_.map(props.screenshots, (child: IScreenie, index: number) => {
          return <img src={child.path} alt={child.alt} key={index} />;
        })}
      </StyledScreenshots>
    </main>
  );
};

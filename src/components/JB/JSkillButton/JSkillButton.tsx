import { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { JTooltip } from "../JTooltip/JTooltip";

export interface IJSkillButton {
  name: string;
  cost: number;
  currentSkillpoints: number;
  onBought: Function;
}

interface IStyled {
  isBought: boolean;
  canAfford: boolean;
}

const StyledButton = styled.button<IStyled>`
  background: none;
  border: none;

  display: grid;

  .title {
    font-size: 18px;
    font-weight: bold;

    color: orange;
  }

  :hover {
    div {
      box-shadow: 0px 20px 20px rgb(0 0 0 / 15%);
    }

    .cost {
      font-size: 20px;
    }

    .tooltip {
      visibility: visible;
    }
  }
`;

const StyledButtonInner = styled.div<IStyled>`
  display: grid;
  background-color: #000000b3;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 15%);
  width: 64px;
  height: 64px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  label {
    margin-top: 2px;
    color: white;
    margin: auto;
  }

  img {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
  }

  .cost {
    display: flex;
    grid-column: 1;
    grid-row: 1;
    margin-top: 2px;
    margin-left: auto;
    margin-right: 0px;
    font-size: 18px;
    font-weight: bold;

    color: ${(props) =>
      props.isBought ? "green" : props.canAfford ? "yellow" : "red"};
  }

  .overlay {
    display: flex;
    grid-column: 1;
    grid-row: 1;
    background-color: #000000b3;
    opacity: ${(props) =>
      props.isBought ? "0.1" : props.canAfford ? "0.1" : "0.3"};
  }
`;
export const JSkillButton: React.FC<IJSkillButton> = ({
  name,
  cost,
  currentSkillpoints,
  onBought,
}) => {
  const [isBought, setIsBought] = useState(false);
  const onClickBuy = () => {
    setIsBought(true);
    onBought(0, cost);
  };

  return (
    <StyledButton
      isBought={isBought}
      canAfford={currentSkillpoints >= cost}
      disabled={isBought || currentSkillpoints < cost}
      onClick={onClickBuy}
    >
      <StyledButtonInner
        isBought={isBought}
        canAfford={currentSkillpoints >= cost}
      >
        <img src="images/jb/skills/en_craft_1.png" alt="Crafting Skill 1" />
        <div className="overlay"></div>
        <label className="cost">{cost}</label>
      </StyledButtonInner>
      <label className="title">{name}</label>

      <JTooltip title={name} description="AAAAAAA!" />
    </StyledButton>
  );
};

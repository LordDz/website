import _ from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TenzieButton } from "../TenzieButton/TenzieButton";
import { TenzieRollButton } from "../TenzieRollButton/TenzieRollButton";

interface ITenzieLogic {
  nrOfButtonsPerRow: number;
  nrOfRows: number;
}

interface IStyledDiv {
  nrOfButtonsPerRow: number;
}

const StyledDiv = styled.div<IStyledDiv>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.nrOfButtonsPerRow}, 64px);
  gap: 20px;
`;

export const TenzieLogic: React.FC<ITenzieLogic> = ({
  nrOfButtonsPerRow,
  nrOfRows,
}) => {
  const [buttons, setButtons] = useState<Array<number>>([]);
  const [showWinnerBtn, setShowWinnerBtn] = useState<Boolean>(false);
  const [buttonStatus, setButtonStatus] = useState<Array<number>>([]);
  const [nrOfClicks, setNrOfClicks] = useState<number>(0);
  const [nrOfRolls, setNrofRolls] = useState<number>(0);
  const [skillText, setSkillText] = useState<string>("");
  const [refreshClass, setRefreshClass] = useState<string>("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  useEffect(() => {
    let numbersArray: Array<number> = [];
    let numbersStatusArray: Array<number> = [];
    for (let i = 0; i < nrOfRows; i++) {
      for (let j = 0; j < nrOfButtonsPerRow; j++) {
        let nr = getRandomNumber();
        numbersArray.push(nr);
        numbersStatusArray.push(0);
      }
    }
    setButtons(numbersArray);
    setButtonStatus(numbersStatusArray);
  }, []);

  const onButtonFrozen = (index: number, isFrozen: boolean) => {
    const statuses = buttonStatus;
    statuses[index] = isFrozen ? 1 : 0;
    setButtonStatus(statuses);

    if (isFrozen && !statuses.includes(0)) {
      //Button was frozen and all buttons are valid
      if (checkIfAllButtonsAreSame(statuses)) {
        setShowWinnerBtn(true);
      }
    }
    const clicks = nrOfClicks + 1; // Need to set it as a temp variable cuz setNrOfClicks isn't instant
    setNrOfClicks(clicks);
    switch (clicks) {
      case 5:
        setSkillText("C'mon you can do this!");
        break;
      case 10:
        setSkillText("So close to winning!");
        break;
      case 14:
        setSkillText("This is becoming a major skill issue.");
        break;
      case 22:
        setSkillText("Zzzzz..");
        break;
      default:
        setSkillText("");
    }
  };

  const checkIfAllButtonsAreSame = (arr: Array<Number>) => {
    return arr.every((val, i, arr) => val === arr[0]);
  };

  const onClickRoll = () => {
    const numbers = buttons;

    for (let i = 0; i < numbers.length; i++) {
      if (buttonStatus[i] !== 1) {
        numbers[i] = getRandomNumber();
      }
    }
    setButtons(numbers);
    setRefreshClass("refresh_" + getRandomNumber());
    setNrofRolls(nrOfRolls + 1);
  };

  return (
    <div className={refreshClass}>
      <StyledDiv nrOfButtonsPerRow={nrOfButtonsPerRow}>
        {_.map(buttons, (child: any, index: number) => {
          return (
            <TenzieButton
              onClickCallback={onButtonFrozen}
              number={child}
              index={index}
              key={index}
            />
          );
        })}
      </StyledDiv>
      {showWinnerBtn ? (
        <h1>A WINRAR IS YOU!</h1>
      ) : (
        <TenzieRollButton onClick={onClickRoll} />
      )}
      <div style={{ display: "grid", marginTop: "20px" }}>
        {nrOfRolls > 0 && <label>Rolls: {nrOfRolls + ""}</label>}
        {nrOfClicks > 0 && <label>Clicks: {nrOfClicks + ""}</label>}
        <label>{skillText}</label>
      </div>
    </div>
  );
};

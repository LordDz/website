import { useState } from "react";
import styled from "styled-components";
import { JSkillButton } from "../JSkillButton/JSkillButton";

interface IJContainer {}

interface IStyledDiv {}

const StyledDiv = styled.div<IStyledDiv>`
  display: grid;
  background-color: white;
  border-radius: 2px;
  width: 340px;
  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;

  grid-template-columns: 1fr 1fr 1fr 1fr;

  * {
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    display: flex;
  }
`;
export const JContainer: React.FC<IJContainer> = ({}) => {
  const [skillpoints, setSkillpoints] = useState<number>(30);

  const onClickButton = (index: number, cost: number) => {
    console.log("clickeliclick!");
    console.log("skillpoints - cost: ", skillpoints - cost);

    setSkillpoints(skillpoints - cost);
  };

  return (
    <div>
      <label>This is a jb container.</label>

      <StyledDiv>
        <JSkillButton
          name="Heyoo"
          cost={10}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Beep"
          cost={12}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Codex"
          cost={25}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Woop"
          cost={55}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />

        <JSkillButton
          name="Heyoo"
          cost={10}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Beep"
          cost={12}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Codex"
          cost={25}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
        <JSkillButton
          name="Woop"
          cost={55}
          currentSkillpoints={skillpoints}
          onBought={onClickButton}
        />
      </StyledDiv>
    </div>
  );
};

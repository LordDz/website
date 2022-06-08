import React, { useEffect, useState } from "react";
import "./Style.css";
import _ from "lodash";
import { Container, IContainer } from "../Container/Container";
import { IScreenie, Screenshots } from "../Screenshots/Screenshots";
/*A fixed page with a scrollbar, shows each container depending on how far the scroll is*/

interface IContainerObject {
  text: string;
  title: string;
}

interface IProps {
  containers: Array<IContainerObject>;
  screenshots: Array<IScreenie>;
}

export const FixedPage: React.FC<IProps> = (props) => {
  const [currentPosY, setCurrentPosY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = (event: any) => {
    const posY = window.scrollY / props.containers.length;
    console.log("posY: ", posY);
    setCurrentPosY(posY);

    // if (windowY >= previousPosY) {
    //     console.log("Scrolled down!");
    //     if (currentIndex + 1 < 10) {
    //         setCurrentIndex(currentIndex + 1);

    //     }
    // }
    // else {
    //     console.log("Scrolled up!");
    //     if (currentIndex - 1 > 0) {
    //         setCurrentIndex(currentIndex -1);

    //     }
    // }

    // const timer = setTimeout(() => {
    //     setCanScroll(true);
    //   }, 800);
    //   return () => clearTimeout(timer);
  };

  const getOpacity = (index: number) => {};

  return (
    <main>
      <div className="fixedChildren">
        {_.map(props.containers, (child: IContainerObject, index: number) => {
          const fixedIndex = index + 1;
          // if (fixedIndex * 100 >= window.scrollY - 100 && fixedIndex * 100 <= window.scrollY - 100)
          // {

          //Concept works, just needs to figure out the exact math formula
          const opacity = fixedIndex - currentPosY;
          const opacityFixed = 1 + opacity + 40;

          console.log("index: ", fixedIndex);
          console.log("opacity: ", opacity);
          console.log("opacityFixed: ", opacityFixed);
          console.log("---");

          return (
            <Container
              title={child.title}
              text={child.text}
              index={fixedIndex}
              opacity={opacityFixed}
              key={index}
            />
          );
          // }
        })}
      </div>

      <Screenshots screenshots={props.screenshots} />
    </main>
  );
};

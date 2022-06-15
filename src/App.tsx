import React, { useState } from "react";
import "./App.css";
import { FixedPage } from "./components/FixedPage/FixedPage";
import { JContainer } from "./components/JB/JContainer/JContainer";
import { TenzieContainer } from "./components/Tenzies/TenzieContainer/TenzieContainer";
import { Turnboard } from "./components/Turn/Turnboard/Turnboard";

function App() {
  const containers = [
    { title: "Web design", text: "aaaaaa" },
    { title: "Magic Maker", text: "Woop Woop" },
    { title: "Amazing!", text: "How do I do math" },
    { title: "What's going on!?", text: "Hey yoo!" },
  ];
  const screeenshots = [
    { path: "", alt: "this is a picture 1" },
    { path: "", alt: "this is a picture 2" },
    { path: "", alt: "this is a picture3" },
    { path: "", alt: "this is a picture4" },
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const maxPages = 3;

  const onClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderJB = (
    <>
      <JContainer />
    </>
  );

  const renderFixedPage = (
    <div className="App-header">
      <FixedPage containers={containers} screenshots={screeenshots} />
    </div>
  );
  const renderTenzieGame = (
    <>
      <TenzieContainer />
    </>
  );

  const renderTurnboard = (
    <>
      <Turnboard />
    </>
  );

  const renderCurrentPage = () => {
    return currentPage === 1
      ? renderFixedPage
      : currentPage === 2
      ? renderTenzieGame
      : currentPage === 3
      ? renderTurnboard
      : renderJB;
  };

  return (
    <div>
      <div className="pageButtons">
        <button onClick={onClickPrevious} disabled={currentPage <= 0}>
          Previous
        </button>
        <button onClick={onClickNext} disabled={currentPage >= maxPages}>
          Next
        </button>
      </div>

      <div>{renderCurrentPage()}</div>
    </div>
  );
}

export default App;

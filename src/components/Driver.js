import React, { useState } from "react";
import WelcomeTemplate from "./WelcomeTemplate/WelcomeTemplate";
import GameTemplate from "./GameTemplate/GameTemplate";
import ThankYou from "./ThankYou/ThankYou";

const renderComponent = (
  displayedScreen,
  setScreen,
  setResultArray,
  resultArray,
  setResultString,
  resultString
) => {
  switch (displayedScreen) {
    case "WelcomeScreen":
      return (
        <WelcomeTemplate
          displayedScreen={displayedScreen}
          setScreen={setScreen}
        />
      );
    case "GameTemplate":
      return (
        <GameTemplate
          displayedScreen={displayedScreen}
          setScreen={setScreen}
          setResultArray={setResultArray}
          setResultString={setResultString}
        />
      );
    case "WavingGoodbye":
      return (
        <ThankYou
          displayedScreen={displayedScreen}
          setScreen={setScreen}
          resultArray={resultArray}
          resultString={resultString}
        />
      );
    default:
      return (
        <ThankYou displayedScreen={displayedScreen} setScreen={setScreen} />
      );
  }
};

const Driver = () => {
  const [displayedScreen, setScreen] = useState(`WelcomeScreen`);
  const [resultArray, setResultArray] = useState([]);
  const [resultString, setResultString] = useState([]);
  return (
    <div
      style={{
        position: `absolute`,
        top: `30%`,
        left: `10%`,
        width: `80%`
      }}
    >
      {renderComponent(
        displayedScreen,
        setScreen,
        setResultArray,
        resultArray,
        resultString,
        setResultString
      )}
    </div>
  );
};
export default Driver;

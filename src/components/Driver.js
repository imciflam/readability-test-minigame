import React, { useState } from "react";
import WelcomeTemplate from "./WelcomeTemplate/WelcomeTemplate";
import GameTemplate from "./GameTemplate/GameTemplate";
import ThankYou from "./ThankYou/ThankYou";

const renderComponent = (
  displayedScreen,
  setScreen,
  setResultArray,
  resultArray
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
        />
      );
    case "WavingGoodbye":
      return (
        <ThankYou
          displayedScreen={displayedScreen}
          setScreen={setScreen}
          resultArray={resultArray}
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
  return (
    <div
      style={{
        position: `absolute`,
        top: `30%`,
        left: `10%`,
        width: `80%`
      }}
    >
      {renderComponent(displayedScreen, setScreen, setResultArray, resultArray)}
    </div>
  );
};
export default Driver;

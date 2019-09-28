import React, { useState } from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import ContrastTemplate from "./ContrastTemplate";
import ThankYou from "./ThankYou";

const renderComponent = (displayedScreen, setScreen) => {
  console.log(displayedScreen);
  switch (displayedScreen) {
    case "WelcomeScreen":
      return (
        <WelcomeTemplate
          displayedScreen={displayedScreen}
          setScreen={setScreen}
        />
      );
    case "ContrastTemplate":
      return (
        <ContrastTemplate
          displayedScreen={displayedScreen}
          setScreen={setScreen}
        />
      );
    case "WavingGoodbye":
      return (
        <ThankYou displayedScreen={displayedScreen} setScreen={setScreen} />
      );
  }
};

export default function Driver() {
  const [displayedScreen, setScreen] = useState(`WelcomeScreen`);
  console.log(displayedScreen);
  return (
    <div
      style={{
        position: `absolute`,
        top: `30%`,
        left: `10%`,
        width: `80%`
      }}
    >
      {renderComponent(displayedScreen, setScreen)}
    </div>
  );
}

import React, { useState } from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import ContrastTemplate from "./ContrastTemplate";

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
  }
};

export default function WelcomeScreen() {
  const [displayedScreen, setScreen] = useState(`WelcomeScreen`);
  console.log(displayedScreen);
  return (
    <React.Fragment>
      {renderComponent(displayedScreen, setScreen)}
    </React.Fragment>
  );
}

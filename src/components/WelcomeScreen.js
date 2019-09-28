import React, { useState } from "react";
import Welc from "./Welc";
import ContrastTemplate from "./ContrastTemplate";

const renderComponent = (displayedScreen, setScreen) => {
  console.log(displayedScreen);
  switch (displayedScreen) {
    case "WelcomeScreen":
      return <Welc displayedScreen={displayedScreen} setScreen={setScreen} />;
    case "ContrastTemplate":
      return <ContrastTemplate displayedScreen={displayedScreen} />;
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

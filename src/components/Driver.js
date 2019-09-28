import React, { useState } from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import ContrastTemplate from "./ContrastTemplate";
import ThankYou from "./ThankYou";

const gameDataLevels = [
  {
    task: `💛💛💛`,
    leftAnswer: ``,
    rightAnswer: ``,
    color: `light`,
    type: `pictogram`
  },
  {
    task: `четыре`,
    leftAnswer: `4`,
    rightAnswer: `6`,
    color: `dark`,
    type: `letters`
  },
  {
    task: `🖤🖤🖤🖤🖤🖤🖤`,
    leftAnswer: `8`,
    rightAnswer: `7`,
    color: `dark`,
    type: `pictogram`
  },
  {
    task: `один`,
    leftAnswer: `1`,
    rightAnswer: `2`,
    color: `light`,
    type: `letters`
  },
  {
    task: `♡♡♡♡♡`,
    leftAnswer: `4`,
    rightAnswer: `5`,
    color: `light`,
    type: `pictogram`
  },
  {
    task: `восемь`,
    leftAnswer: `9`,
    rightAnswer: `8`,
    color: `dark`,
    type: `letters`
  },
  {
    task: `🖤🖤🖤🖤🖤🖤🖤🖤🖤`,
    leftAnswer: `8`,
    rightAnswer: `9`,
    color: `dark`,
    type: `pictogram`
  },
  {
    task: `пять`,
    leftAnswer: `6`,
    rightAnswer: `5`,
    color: `light`,
    type: `letters`
  },
  {
    task: `💛💛💛💛💛💛`,
    leftAnswer: `5`,
    rightAnswer: `6`,
    color: `light`,
    type: `pictogram`
  },
  {
    task: `два`,
    leftAnswer: `2`,
    rightAnswer: `1`,
    color: `dark`,
    type: `letters`
  }
];

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

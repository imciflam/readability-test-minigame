import React, { Component } from "react";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Welcome to the game!</p>

        <p>
          You will see two sets of number sequences written in different ways.
        </p>

        <p>Your task is to recongise each number and give an answer ASAP.</p>

        <p>Are you ready? Click play!</p>
      </React.Fragment>
    );
  }
}

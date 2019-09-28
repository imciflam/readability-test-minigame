import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function WelcomeScreen() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <p>Welcome to the game!</p>

      <p>
        You will see two sets of number sequences written in different ways.
      </p>

      <p>Your task is to recongise each number and give an answer ASAP.</p>

      <p>Use your 🠐 🠒 buttons for it.</p>

      <p>Are you ready? Then click play!</p>

      <Button variant="contained" className={classes.button}>
        Play
      </Button>
    </React.Fragment>
  );
}

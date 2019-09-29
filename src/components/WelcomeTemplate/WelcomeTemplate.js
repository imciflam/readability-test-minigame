import React from "react";
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
const WelcomeTemplate = props => {
  const classes = useStyles();
  const handleClick = () => {
    props.setScreen(`GameTemplate`); // function to change screen
  };
  return (
    <React.Fragment>
      <p>Welcome to the game!</p>

      <p>
        You will see two sets of number sequences written in different ways.
      </p>

      <p>Your task is to recognise each number and give an answer ASAP.</p>

      <p>Use your 🠐 🠒 buttons for it.</p>

      <p>Are you ready? Then click play!</p>

      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        Play
      </Button>
    </React.Fragment>
  );
};

export default WelcomeTemplate;

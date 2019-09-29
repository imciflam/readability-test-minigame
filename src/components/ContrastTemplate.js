import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./ContrastTemplate.css";

const gameDataLevels = [
  {
    task: `💛💛💛`,
    leftAnswer: `4`,
    rightAnswer: `3`,
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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2),
    card: {
      minWidth: 300
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  }
}));

// custom hook
const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);
    console.log(event);
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      console.log("clean");
      window.removeEventListener(event, handler);
    };
  });
};

const handleOnKeyDown = () => {
  // if (event.code == "ArrowLeft" || event.code == "ArrowRight ") {
  //   alert("works!");
  // }
};
const ContrastTemplate = props => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  useEvent("keydown", event => {
    if (event.keyCode === 37 || event.keyCode === 39) {
      alert("e");
    }
  });

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          What does this expression mean?
        </Typography>
        <br />
        <Typography component="p">{gameDataLevels[counter].task}</Typography>
      </Paper>
      <div className="container">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h3" component="h2">
              {gameDataLevels[counter].leftAnswer}
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h3" component="h2">
              {gameDataLevels[counter].rightAnswer}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContrastTemplate;

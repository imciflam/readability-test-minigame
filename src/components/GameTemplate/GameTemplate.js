import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./GameTemplate.css";

const gameDataLevels1 = [
  {
    task: `💛💛💛`,
    leftAnswer: `4`,
    rightAnswer: `3`,
    color: `light`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `четыре`,
    leftAnswer: `4`,
    rightAnswer: `6`,
    color: `dark`,
    type: `letters`,
    correct: `0`
  },
  {
    task: `🖤🖤🖤🖤🖤🖤🖤`,
    leftAnswer: `8`,
    rightAnswer: `7`,
    color: `dark`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `один`,
    leftAnswer: `1`,
    rightAnswer: `2`,
    color: `light`,
    type: `letters`,
    correct: `0`
  },
  {
    task: `♡♡♡♡♡`,
    leftAnswer: `4`,
    rightAnswer: `5`,
    color: `light`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `восемь`,
    leftAnswer: `9`,
    rightAnswer: `8`,
    color: `dark`,
    type: `letters`,
    correct: `1`
  },
  {
    task: `🖤🖤🖤🖤🖤🖤🖤🖤🖤`,
    leftAnswer: `8`,
    rightAnswer: `9`,
    color: `dark`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `пять`,
    leftAnswer: `6`,
    rightAnswer: `5`,
    color: `light`,
    type: `letters`,
    correct: `1`
  },
  {
    task: `💛💛💛💛💛💛`,
    leftAnswer: `5`,
    rightAnswer: `6`,
    color: `light`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `два`,
    leftAnswer: `2`,
    rightAnswer: `1`,
    color: `dark`,
    type: `letters`,
    correct: `0`
  }
];

const gameDataLevels2 = [
  {
    task: `пять`,
    leftAnswer: `5`,
    rightAnswer: `6`,
    color: `dark`,
    type: `letters`,
    correct: `0`
  },
  {
    task: `💛💛💛💛💛💛`,
    leftAnswer: `7`,
    rightAnswer: `6`,
    color: `light`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `🖤🖤🖤🖤🖤🖤🖤🖤🖤`,
    leftAnswer: `8`,
    rightAnswer: `9`,
    color: `dark`,
    type: `pictogram`,
    correct: `1`
  },
  {
    task: `два`,
    leftAnswer: `1`,
    rightAnswer: `2`,
    color: `light`,
    type: `letters`,
    correct: `1`
  },
  {
    task: `♡♡♡♡`,
    leftAnswer: `4`,
    rightAnswer: `5`,
    color: `light`,
    type: `pictogram`,
    correct: `0`
  },
  {
    task: `восемь`,
    leftAnswer: `9`,
    rightAnswer: `8`,
    color: `dark`,
    type: `letters`,
    correct: `1`
  },
  {
    task: `🖤🖤`,
    leftAnswer: `3`,
    rightAnswer: `2`,
    color: `dark`,
    type: `pictogram`,
    correct: `1`
  },

  {
    task: `два`,
    leftAnswer: `2`,
    rightAnswer: `1`,
    color: `dark`,
    type: `letters`,
    correct: `0`
  },
  {
    task: `💛💛💛💛💛💛💛`,
    leftAnswer: `7`,
    rightAnswer: `6`,
    color: `light`,
    type: `pictogram`,
    correct: `0`
  },
  {
    task: `шесть`,
    leftAnswer: `6`,
    rightAnswer: `5`,
    color: `light`,
    type: `letters`,
    correct: `0`
  }
];

const gameDataLevels = Math.floor(Math.random() * 2)
  ? gameDataLevels1
  : gameDataLevels2;

const answerGetter = () => {
  let answerLine = "";
  for (var i = 0; i < gameDataLevels.length; i++) {
    answerLine = answerLine.concat(gameDataLevels[i].correct);
  }
  return answerLine;
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2),
    card: {
      minWidth: 300
    }
  }
}));

// custom hook
const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);
    // this will clean up the event every time the component is re-rendered
    // componentDidUpdate, basically
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

let timeSaver = [];
let userString = [];
const screenSwitcher = (props, counter, setCounter) => {
  const currentMs = new Date().getTime();
  timeSaver.push(currentMs);
  props.setResultArray(timeSaver);
  if (counter < 9) {
    setCounter(counter + 1); // function to change counter
  } else {
    props.setResultArray(timeSaver);
    const answerLine = answerGetter();
    console.log(answerLine);
    console.log(userString.join(""));
    if (userString.join("") !== answerLine) {
      props.setResultString("mistakes were made");
    } else {
      props.setResultString("mistakes were not made");
    }
    props.setScreen(`WavingGoodbye`);
  }
};

const GameTemplate = props => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const startMs = new Date().getTime();
    timeSaver.push(startMs);
  }, []); // fired on a first load, so it's basically componentDidMount

  useEvent("keydown", event => {
    if (event.keyCode === 37 || event.keyCode === 39) {
      if (event.keyCode === 37) {
        userString.push("0");
      } else if (event.keyCode === 39) {
        userString.push("1");
      }
      screenSwitcher(props, counter, setCounter);
    }
  });
  return (
    <div className="contrastContainer">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          What does this expression mean?
        </Typography>
        <br />
        <Typography
          style={{
            color: gameDataLevels[counter].color === `dark` ? `yellow` : `black`
          }}
          component="p"
        >
          {gameDataLevels[counter].task}
        </Typography>
      </Paper>
      <div className="container">
        <Card className={classes.card}>
          <CardActionArea onClick={() => alert("use the arrow key, luke")}>
            <CardContent>
              <Typography variant="h3" component="h2">
                {gameDataLevels[counter].leftAnswer}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea onClick={() => alert("use the arrow key, luke")}>
            <CardContent>
              <Typography variant="h3" component="h2">
                {gameDataLevels[counter].rightAnswer}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default GameTemplate;

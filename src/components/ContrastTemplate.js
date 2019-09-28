import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./ContrastTemplate.css";

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

export default function ContrastTemplate(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          What does this expression mean?
        </Typography>
        <br />
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
      <div className="container">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              beeeee
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              beeeee
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

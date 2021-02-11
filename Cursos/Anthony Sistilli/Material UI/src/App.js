import { Button, Typography, makeStyles, useTheme } from "@material-ui/core";
import CoolButton from "./CoolButton";

const useStyles = makeStyles(theme => ({
  title: {
    fontStyle: 'oblique',
    fontSize: 24,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    [theme.breakpoints.up("sm")]: {
      backgroundColor: 'black'
    }
  }
}))

function App() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <div className="App">
      <Typography className={classes.title}>Hellow orldd!</Typography>
      <Button variant="contained" fullWidth className={classes.buttonStyle}>Hellooow orld!</Button>
      {/* <CoolButton cool={false} /> */}
    </div>
  );
}

export default App;

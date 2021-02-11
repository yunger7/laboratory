import { Button, Typography, makeStyles } from "@material-ui/core";
import CoolButton from "./CoolButton";

const useStyles = makeStyles({
  title: {
    fontStyle: 'oblique',
    fontSize: 24
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography color="primary" className={classes.title}>Hellow orldd!</Typography>
      <CoolButton cool={false} />
    </div>
  );
}

export default App;

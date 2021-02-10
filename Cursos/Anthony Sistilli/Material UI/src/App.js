import { Button, Typography, makeStyles } from "@material-ui/core";

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
      <Button fullWidth variant="contained" color="secondary">This is my first component</Button>
    </div>
  );
}

export default App;

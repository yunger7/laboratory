import { Grid, makeStyles } from "@material-ui/core";
import OutlinedCard from "./Card";

const useStyles = makeStyles({
  gridContainer: {
    padding: '16px 30px'
  }
})

function App() {
  const classes = useStyles();

	return (
    <Grid container spacing={3} justify="space-around" className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
    </Grid>
	);
}

export default App;

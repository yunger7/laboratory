import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MonetizationOn } from "@material-ui/icons";

const useStyles = makeStyles({
  logo: {
    marginRight: 6,
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <MonetizationOn fontSize="large" className={classes.logo} />
        <Typography component="h1" variant="h6">
          BitNext
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;
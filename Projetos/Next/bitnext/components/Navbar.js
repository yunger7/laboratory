import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MonetizationOn } from "@material-ui/icons";

const useStyles = makeStyles({
  logo: {
    minWidth: '115px',
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.logo}>
          <MonetizationOn fontSize="large" />
          <Typography component="h1" variant="h6">
            BitNext
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
 
export default Navbar;
import classNames from "classnames";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonText: {
    color: 'blue',
    fontStyle: 'oblique'
  },
  buttonBackground: {
    backgroundColor: 'red'
  }
})

// const useStyles = makeStyles(theme => ({
//   buttonStyle: props => {
//     return {
//       color: props.cool ? theme.palette.primary : 'white',
//       backgroundColor: props.cool ? theme.palette.secondary : 'black',
//     }
//   }
// }))

const CoolButton = (props) => {
  const classes = useStyles(props);

  return (
    <Button className={classNames(classes.buttonText, classes.buttonBackground)}>Cool button</Button>
  );
}
 
export default CoolButton;
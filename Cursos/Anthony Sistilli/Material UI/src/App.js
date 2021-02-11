import { useState } from 'react';
import { Switch, Button, Typography, makeStyles, createMuiTheme, ThemeProvider, Paper } from "@material-ui/core";
import CoolButton from "./CoolButton";

// const useStyles = makeStyles(theme => ({
//   title: {
//     fontStyle: 'oblique',
//     fontSize: 24,
//   },
//   buttonStyle: {
//     backgroundColor: 'blue',
//     [theme.breakpoints.up("sm")]: {
//       backgroundColor: 'black'
//     }
//   }
// }))

function App() {
  // const classes = useStyles();
  const [darkTheme, setDarkTheme] = useState();

  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }} square>
        <Typography variant="h1">Hellow orldd!</Typography>
        <Button color="primary" variant="contained">Click me!</Button>
        <Switch color="primary" checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

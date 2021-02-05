import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Public from '@material-ui/icons/Public';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    marginBottom: 20
  }
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test styled button</Button>
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  },
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 10
    }
  }
})

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox 
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
            color="primary"
          />
        }
        label="I am a checkbox label"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
      >
        <div className="App">
          <header className="App-header">
            <Typography
              component="h1"
              variant="h2"
            >Testing MUI</Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify="center">
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <TextField
              label="Email"
              placeholder="example@test.com"
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<Public />}
                size="large"
                variant="contained"
                color="primary"
              >Hello World</Button>
              <Button
                endIcon={<Public />}
                size="large"
                variant="text"
                color="secondary"
              >Bye World</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        </Container>
    </ThemeProvider>
  );
}

export default App;

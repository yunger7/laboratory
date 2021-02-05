import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Public from '@material-ui/icons/Public';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)'
  }
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test styled button</Button>
}

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
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
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
  );
}

export default App;

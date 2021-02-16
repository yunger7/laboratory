import { Switch, Route } from "react-router-dom";
import Pokedex from "./Pokemon";
import Pokemon from "./Pokedex";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Pokedex {...props} />} />
      <Route path="/:pokemonId" render={props => <Pokemon {...props} />} />

    </Switch>
  );
}

export default App;

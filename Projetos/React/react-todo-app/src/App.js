import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <TaskList />
            </Route>
            <Route path="/add">
              <AddTask />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

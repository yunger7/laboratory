import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Firestore } from './firebase/config';
import { useCollection } from 'react-firebase-hooks/firestore'
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, loading, error] = useCollection(Firestore.collection('tasks'));

  return (
    <Router>
      <div className="App">
        <Header tasks={tasks} />
          <Switch>
            <Route exact path="/">
              { loading && <span>Loading...</span> }
              { error && <span>{ error }</span> }
              { tasks && <TaskList tasks={tasks} /> }
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

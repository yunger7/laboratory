import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Clean my room",
      day: "Jan 28 at 10:00 AM",
      reminder: false,
    },
    {
      id: 2,
      text: "Buy groceries",
      day: "Jan 28 at 2:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Meditate",
      day: "Jan 28 at 10:00 PM",
      reminder: true,
    }
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

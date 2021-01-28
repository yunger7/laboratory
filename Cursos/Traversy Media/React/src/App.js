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

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

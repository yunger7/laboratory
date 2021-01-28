import { useState } from 'react';

const Tasks = () => {
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
    <>
      { tasks.map(task => (<h3 key={task.id}>{ task.text }</h3>)) }
    </>
  );
}
 
export default Tasks;
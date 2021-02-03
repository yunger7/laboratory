import { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');

  return (
    <form>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Task name" required />
      <input type="submit" value="Save" />
    </form>
  );
}
 
export default AddTask;
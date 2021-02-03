import { useState } from 'react';
import { Firestore } from '../firebase/config';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    await Firestore.collection('tasks').add({task});
    setTask('');
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Task name" disabled={loading} required />
      <input type="submit" value="Save" disabled={loading} />
    </form>
  );
}
 
export default AddTask;
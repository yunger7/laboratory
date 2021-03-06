import { useState } from 'react';
import { Firestore } from '../firebase/config';
import { useHistory } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    await Firestore.collection('tasks').add({text: task});
    setTask('');
    setLoading(false);
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} placeholder="Task name" disabled={loading} required />
      <input type="submit" value="🎯" disabled={loading} />
    </form>
  );
}
 
export default AddTask;
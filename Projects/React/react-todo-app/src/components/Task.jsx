const Task = ({ task, deleteTask }) => {
  return (
    <li onClick={() => deleteTask(task.id)}>{ task.text }</li>
  );
}
 
export default Task;
const Task = ({ task }) => {
  return (
    <li data-id={task.id}>{ task.text }</li>
  );
}
 
export default Task;
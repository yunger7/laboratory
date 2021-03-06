import Task from "./Task";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      <ul>
        { tasks.docs.map(doc => (
          <Task key={doc.id} task={{...doc.data(), id: doc.id}} deleteTask={deleteTask} />
        )) }
      </ul>
    </div>
  );
}
 
export default TaskList;
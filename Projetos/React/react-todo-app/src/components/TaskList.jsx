import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <ul>
        { tasks.docs.map(doc => (
          <Task key={doc.id} task={{...doc.data(), id: doc.id}} />
        )) }
      </ul>
    </div>
  );
}
 
export default TaskList;
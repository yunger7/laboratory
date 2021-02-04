const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <ul>
        { tasks.docs.map(doc => (
          <li key={doc.id}>{ doc.data().text }</li>
        )) }
      </ul>
    </div>
  );
}
 
export default TaskList;
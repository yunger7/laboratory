import { Link, useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'

const Header = ({ tasks }) => {
  const location = useLocation();

  return (
    <header>
      <h1><FaCheck /> Todo App</h1>
      { location.pathname === "/" && tasks && <p>You have {tasks.docs.length ? `${tasks.docs.length} ${tasks.docs.length > 1 ? 'tasks' : 'task'} to do...` : 'no tasks to do... Yay!'}</p> }
      <Link to={ location.pathname === "/" ? "/add" : "/" }>{ location.pathname === "/" ? 'Add task' : 'Go back'}</Link>
    </header>
  );
}
 
export default Header;
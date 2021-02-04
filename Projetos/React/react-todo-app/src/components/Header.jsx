import { Link, useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa'

const Header = ({ tasks }) => {
  const location = useLocation();

  return (
    <header>
      <h1><FaCheck /> Todo App</h1>
      { location.pathname === "/" && <p>You have { tasks ? `${tasks.docs.length} ${tasks.docs.length === 1 ? 'task' : 'tasks'}` : '0 tasks' } to do...</p> }
      <Link to={ location.pathname === "/" ? "/add" : "/" }>{ location.pathname === "/" ? 'Add task' : 'Go back'}</Link>
    </header>
  );
}
 
export default Header;
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops!</h2>
      <p>It looks like this page doesn't exist (っ °Д °;)っ</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
}
 
export default NotFound;
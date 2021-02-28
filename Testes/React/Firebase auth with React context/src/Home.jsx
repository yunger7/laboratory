import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome 👋</h1>
      <p>Logged in as { user.email }</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}
 
export default Home;
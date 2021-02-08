import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './firebaseConfig';

const Home = () => {
  const { user } = useContext(AuthContext);

  const signOut = () => {
    auth.signOut()
  }

  return (
    <div>
      <h1>Welcome 👋</h1>
      <p>Logged in as { user.email }</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
 
export default Home;
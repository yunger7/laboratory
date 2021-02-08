import { auth } from './firebaseConfig';

const Home = () => {
  const signOut = () => {
    auth.signOut()
  }

  return (
    <div>
      <h1>You are logged in...</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
 
export default Home;
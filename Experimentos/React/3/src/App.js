import Login from './Login';
import SignUp from './SignUp';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
import { useEffect, useState } from 'react';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [opType, setOpType] = useState('login');

  useEffect(() => {
    console.log(user);
  }, [user])

  if (loading) {
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    )
  }

  if (error) {
    return (
      <div className="App">
        <h3>{ error }</h3>
      </div>
    )
  }

  if (user) {
    return (
      <Home />
    )
  }

  return (
    opType === 'login' ? <Login setOpType={setOpType} /> : <SignUp setOpType={setOpType} />
  )
}

export default App;

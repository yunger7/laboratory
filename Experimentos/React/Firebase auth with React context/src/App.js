import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

function App() {
  const [opType, setOpType] = useState('login');
  const { user, authLoading, authError } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log(user);
  // }, [user])

  if (authLoading) {
    return (
      <div className="App">
        <h3>Loading...</h3>
      </div>
    )
  }

  if (authError) {
    return (
      <div className="App">
        <h3>{ authError }</h3>
      </div>
    )
  }

  if (user) {
    return (
      <Home user={user} />
    )
  }

  return (
    opType === 'login' ? <Login setOpType={setOpType} /> : <SignUp setOpType={setOpType} />
  )
}

export default App;

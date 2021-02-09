import { useState, useContext } from 'react';
import { auth } from './firebaseConfig';
import { AuthContext } from './AuthContext';

const Login = ({ setOpType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)

    // auth.signInWithEmailAndPassword(email, password).then(() => {
    //   setError(null);
    // })
    // .catch(err => {
    //   setError(err.message);
    // });
  }

  return (
    <>
      <h1>Welcome!</h1>
      <p>Please login to continue...</p>
      {/* { error && <div className="error">{ error }</div> } */}
      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
        <br/>
        <button type="submit">Login</button>
      </form>
      <a href="#" onClick={() => setOpType('signup')}>Don't have an account? Sign up instead</a>
    </>
  )
}

export default Login;
import { useState } from 'react';
import { auth } from './firebaseConfig';

const SignUp = ({ setOpType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      setError(null);
    })
    .catch(err => {
      setError(err.message);
    });
  }

  return (
    <>
      <h1>Welcome!</h1>
      <p>Please sign up to continue...</p>
      { error && <div className="error">{ error }</div> }
      <form onSubmit={e => handleSubmit(e)}>
        <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
        <br/>
        <button type="submit">Sign up</button>
      </form>
      <a href="#" onClick={() => setOpType('login')}>Already have an account? Log in instead</a>
    </>
  )
}

export default SignUp;
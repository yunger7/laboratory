import { useState } from 'react';

const Home = ({ title }) => {
  const [num, setNum] = useState(0);

  return (
    <div className="home">
      <h1>{ title }</h1>
      <p>{ num }</p>
      <button onClick={() => setNum(num + 1)}>Click me</button>
    </div>  
  );
}
 
export default Home;
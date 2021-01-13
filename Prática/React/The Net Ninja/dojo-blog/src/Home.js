import { useState } from 'react';

const Home = () => {
  // let name = "Mario";
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(18);

  const handleClick = () => {
    setName("Luigi");
    setAge(20);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>Name: { name }</p>
      <p>Age: { age }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;
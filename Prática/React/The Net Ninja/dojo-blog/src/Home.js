const Home = () => {
  const handleClick = () => {
    console.log("Thanks for clicking");
  }

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Luigi", e)}>Click me again</button>
    </div>
  );
}
 
export default Home;
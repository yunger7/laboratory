import './App.css';

function App() {
  const title = "Welcome to the blog!";
  const link = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>

        <p>{ 10 }</p>
        <p>{ "Hello world!" }</p>
        <p>{ [1, 2, 3, 4] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google website</a>
      </div>
    </div>
  );
}

export default App;

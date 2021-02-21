import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
        <div className="content">
          <Articles />
          <User />
        </div>
      </header>
    </div>
  );
}

export default App;

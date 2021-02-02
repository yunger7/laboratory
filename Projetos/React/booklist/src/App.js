import NavBar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />    
      </BookContextProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import IntroMessage from "./components/IntroMessage";
import SongList from "./components/SongList";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <IntroMessage />
        <SongList />
      </div>
    </>
  );
}

export default App;

import Weather from "./weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Tehran" />
      </header>
      <footer>
        This is project was coded by Roya Almasimehr. and is{" "}
        <a href="https://github.com/RoyaAlmasimehr/weather-react">
          open-sourced on GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;

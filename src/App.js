import logo from "./logo.svg";
import "./App.css";
import config from "./../package.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App version: {config.version}</p>
        <div
          style={{
            textAlign: "left",
            width: "50%",
          }}
        >
          <h1>Releases</h1>
          <p>
            Release means packing a stable version of the app published with a
            version (usually semantic but it can be in any format), title and
            description. It can be also include some supporting files uploaded
            separately.
          </p>
          <h1>Tags</h1>
          <p>"Tag" allows you to mark specific commits in your repository.</p>
        </div>
      </header>
    </div>
  );
}

export default App;

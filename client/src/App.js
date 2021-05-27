import './App.css';
import './index.css';
import Playbutton from './Playbutton';
import BPMBox from './BPMBox';
import Grid from './Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 id="header-name">BEATEON</h1>
          <button id = "sign-button">Sign up</button>
          <button id = "log-button">Log in</button>
      </header>
      <div className="play-bpm-export">
        <Playbutton />
        <BPMBox />
        <button id = "export-button">Export</button>
      </div>
      <Grid />
    </div>
  );
}

export default App;

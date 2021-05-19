import './App.css';
import './index.css';
import Playbutton from './Playbutton';
import dropDownButton from './dropDownButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 id="header-name">Beateon</h1>
          <button id = "sign-button">Sign up</button>
          <button id = "log-button">Log in</button>
          <Playbutton />
          <dropDownButton />
      </header>
    </div>
  );
}

export default App;

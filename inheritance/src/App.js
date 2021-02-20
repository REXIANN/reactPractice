import logo from './logo.svg';
import './App.css';
import WelcomeDialog from './WelcomeDialog'
import SplitPane from './SplitPane'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeDialog />

        <div>
          <SplitPane />
        </div>
      </header>
    </div>
  );
}

export default App

import logo from './logo.svg';
import './App.css';

import IbtApi from './IbtApi'
import IbtChart from './IbtChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <IbtApi/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import IbtApi from './IbtApi'
import IbtCoinList from './IbtCoinList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <IbtApi />
        <IbtCoinList />
      </header>
    </div>
  );
}

export default App;

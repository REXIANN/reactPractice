import ExampleFlow from './ExampleFlow'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div>
          <ExampleFlow name={"kim"} age={28} />
        </div>
        
      </header>
    </div>
  );
}

export default App;

import ImportComponent from './ImportComponent'

function App() {
  // part1
  // page: 25~36, 49~63
  console.log('render App')
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ImportComponent value='FromApp.js' />
    </div>
  );
}

export default App;

import ImportComponent from './ImportComponent'
import ClassPrototype from './ClassPrototype'

function App() {
  // part1
  // page: 25~36, 49~63
  console.log('render App')
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ImportComponent value='FromApp.js' />
      <ClassPrototype />
    </div>
  );
}

export default App;

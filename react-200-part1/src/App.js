import ImportComponent from './ImportComponent'
import ClassPrototype from './ClassPrototype'
import ArrowFunc from './ArrowFunc'

function App() {
  // part1
  // page: 25~36, 49~63
  console.log('render App')
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ImportComponent value='FromApp.js' />
      <ClassPrototype />
      <ArrowFunc />
    </div>
  );
}

export default App;

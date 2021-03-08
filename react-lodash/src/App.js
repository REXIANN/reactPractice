import { find } from 'lodash'

function App() {
  const arr = ['he', 'llo', 'wor', 'ld']
  return (
    <div className="App">
      {find(arr, elem => elem.length > 2)}
    </div>
  );
}

export default App

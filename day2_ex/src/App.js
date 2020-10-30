import './App.css';
import Counter from "./Counter"
import Joke from "./Joke"
import Members from "./ListDemo"

function App() {
  return (
    <div className="App">
      <h2>Day 2</h2>
      <Counter start={10} increment={5}/>
      <Joke/>
      <Members/>
    </div>
  );
}

export default App;

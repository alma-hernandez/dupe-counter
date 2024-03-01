import './App.css';
import IndividualCounter from './components/IndividualCounter';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
     <h1>Duplicate counter app</h1>
     <div>Counter 1<span>{IndividualCounter}</span></div>
     <div>Counter 2<span>{IndividualCounter}</span></div>
     <div>Counter 3<span>{IndividualCounter}</span></div>
     <div>Counter 3<span>{IndividualCounter}</span></div>
     < Total />
    </div>
  );
}

export default App;

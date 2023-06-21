import './App.css';

function App() {
  return (
    <div className="container">
      <div>Incrementer & Decrementer </div>
      <div className='box'>
        <button onclick="subtract()"> - </button>
        <div> 0 </div>
        <button onclick="addition()"> + </button>
      </div>    
    </div>
  );
}

export default App;

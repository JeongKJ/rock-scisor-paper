import './App.css';
import Button from './Button';
import Border from './Border';
import { useState } from 'react';

const random = (value) => { return Math.ceil(Math.random() * value) }
function App() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [round, setRound] = useState(1);
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [result, setResult] = useState('');
  var none = document.querySelector('#button>button:first-of-type');
  var block = document.querySelector('#button>button:nth-of-type(2)');
  
  const playGame = () => {
    const redteam = random(3);
    const blueteam = random(3);
    const win = '승리';
    const lose = '패배';
    const draw = '무승부'

   
    if (round <= 5) { 
      setRound(round + 1);
      setFirst([...first, redteam]);
      setSecond([...second, blueteam]);
    }
    else if (round > 5) {
      none.style.display = 'none';
      block.style.display = 'block';
      return false;
    }
    if (redteam === 1) {
        if (blueteam === 1) {
          setOne([...one, draw]);
          setTwo([...two, draw]);
      }
      else if(blueteam === 2){
          setOne([...one, win])
          setTwo([...two, lose]);
      }
      else if(blueteam === 3){
          setOne([...one, lose]);
          setTwo([...two, win]);
      }
    }
        if (redteam === 2) {
        if (blueteam === 1) {
          setOne([...one, lose]);
          setTwo([...two, win]);
      }
      else if(blueteam === 2){
          setOne([...one, draw]);
          setTwo([...two, draw]);
      }
      else if(blueteam === 3){
          setOne([...one, win])
          setTwo([...two, lose]);
      }
    }
        if (redteam === 3) {
        if (blueteam == 1) {
          setOne([...one, win])
          setTwo([...two, lose]);
        
      }
      else if(blueteam == 2){
          setOne([...one, lose]);
          setTwo([...two, win]);
      }
      else if(blueteam == 3){
          setOne([...one, draw]);
          setTwo([...two, draw]);
      }
    }
  }
  const resetGame = () => {
    setFirst([]);
    setSecond([]);
    setRound(1);
    setOne([]);
    setTwo([]);
    setResult('');
    none.style.display = 'block';
    block.style.display = 'none';
  }
  const gameResult = () => { 
    if (first > second) {
      setResult('A Team win.');
    }
    else {
      setResult('B Team win.');
    }
  }

  return (
    <div id="box">
      <div id='contain'>
        <h1>Game</h1>
        <div id='button'>
          <Button onClick={playGame}>Start</Button>
          <Button onClick={gameResult}>Result</Button>
          <Button onClick={resetGame}>Reset</Button>
        </div>
        <h2>{result}</h2>
        <Border name="A Team" record={first} result={one} round={round} />
        <h1>VS</h1>
        <Border name="B Team" record={second} result={two} round={round}/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Button from './Button';
import Border from './Border';
import { useState } from 'react';

const random = (value) => { return Math.ceil(Math.random() * value) }
function App() {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);

  const playGame = () => {
    const redteam = random(3);
    const blueteam = random(3);
    setFirst([...first, redteam]);
    setSecond([...second, blueteam]);
    console.log(first);
  }
  const resetGame = () => {}

  return (
    <div id="box">
      <div id='contain'>
        <h1>Game</h1>
        <div id='button'>
        <Button onClick={playGame}>Start</Button>
        <Button onClick={resetGame}>Reset</Button>
        </div>
        <Border name="팀 A" record={first}/>
        <Border name="팀 B" record={second} />
      </div>
    </div>
  );
}

export default App;

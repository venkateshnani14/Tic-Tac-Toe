import logo from './logo.svg';
import './App.css';
import Box from './box'
import Grid from './grid'
import { useState } from 'react';

export default function Game(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares) {
    //when the state changes, the components are re rendered
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className='game'>
      <h2>TICTAC-TOE</h2>
      <Grid xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      <ol></ol>
    </div>
  );
}
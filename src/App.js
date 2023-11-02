import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from './box'
import Grid from './grid'
import { useState } from 'react';

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove] = useState(0);
  const xIsNext = currentMove%2===0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares){
    //when the state changes, the components are re rendered
    const nextHistory = ([...history.slice(0,currentMove+1), nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
    // setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove){
    // setXIsNext(nextMove%2===0);
    setCurrentMove(nextMove);
  }

    const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'New Game';
    }
    return (
      <li key={move}>
        <button className="btn mt-1 btn-sm btn-primary" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
    });
    return (
    <div className='game'>
      <h2 id='heading' className='my-3'>TICTAC-TOE</h2>
      <div className='d-flex justify-content-around'>
      <div><Grid xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/></div>
      <div><ul>{moves}</ul></div>
      </div>
    </div>
    );
    }
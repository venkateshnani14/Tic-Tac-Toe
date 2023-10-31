import logo from './logo.svg';
import './App.css';
import Box from './box'
import Grid from './grid'

export default function Game() {
  return (
    <div className='game'>
      <h2>TICTAC-TO</h2>
      <Grid/>
      <ol></ol>
    </div>
    

  );
}


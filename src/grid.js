import { useState } from 'react';
import Box from './box'

export default function Grid(){
    const [squares,setSquares] = useState(Array(9).fill(null));
    const [nextIsX,setNextIsX] = useState(true);
    const top = chickenDinner(squares);
    let output;
    if(!top)output = "Continue playing";
    else{
        output = <div>
            <h3 id="game_end">Game over</h3>
            <br/>
            {top + " is the Winner"}
            <br/>
            <button onClick={NewGame}>New game</button>
        </div>
    }
    function NewGame(){
        setSquares(null);
    }
    
    function handleClick(i){
        //if there is an existing value already
        if(squares[i])return;
        if (squares[i] || chickenDinner(squares)) {
            return;
          }

        const nextSquares = squares.slice();
        if(nextIsX) nextSquares[i] = 'X';
        else nextSquares[i] = 'O';
        setSquares(nextSquares);
        setNextIsX(!nextIsX);
    }
   return(
    <>
    <div className="row">
    <Box val={squares[0]} clickedMe={()=>handleClick(0)}/>
    <Box val={squares[1]} clickedMe={()=>handleClick(1)}/>
    <Box val={squares[2]} clickedMe={()=>handleClick(2)}/>
    </div>
    <div className="row">
    <Box val={squares[3]} clickedMe={()=>handleClick(3)}/>
    <Box val={squares[4]} clickedMe={()=>handleClick(4)}/>
    <Box val={squares[5]} clickedMe={()=>handleClick(5)}/>
    </div>
    <div className="row">
    <Box val={squares[6]} clickedMe={()=>handleClick(6)}/>
    <Box val={squares[7]} clickedMe={()=>handleClick(7)}/>
    <Box val={squares[8]} clickedMe={()=>handleClick(8)}/>
    </div>
    <div>
        <h3>{output}</h3>
    </div>
</>
   );
}
function chickenDinner(squares){
    const chances = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
                    ];
                    for(let i=0;i<chances.length;i++){
                        const [a,b,c] = chances[i];
                        if(squares[a] && squares[a]===squares[b]&&squares[b]===squares[c]){return squares[a];}
                    }
                    return null;
}

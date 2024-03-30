import { useEffect, useState } from 'react';
import moveData from './data/movesData';
import './App.css';
import Square from './components/Square/Square';
import SquareContainer from './components/SquareContainer/SquareContainer';
import PieceContainer from './components/PieceContainer/PieceContainer';
import Piece from './components/Piece/Piece';
export const nums = Object.keys(moveData.default)
export const pieces = Object.keys(moveData)

function App() {
  const [selectedPiece, setSelectedPiece] = useState('default')
  const [moves, setMoves] = useState(moveData.default)

  useEffect(() => {
    setMoves(moveData[selectedPiece])
  }, [selectedPiece])
  const nums = Object.keys(moves)
  const pieces = Object.keys(moveData)
  return (
    <div className="App">
      <SquareContainer>
        {nums.map(squareType => {
          if (
            moves[squareType] === 'pawn' ||
            moves[squareType] === 'castle' ||
            moves[squareType] === 'knight' ||
            moves[squareType] === 'bishop' ||
            moves[squareType] === 'king' ||
            moves[squareType] === 'queen' 
          ) {
            return <Piece key={squareType} piece={moves[squareType]} setPiece={setSelectedPiece} />
          }
          return (<Square key={squareType} backgroundColor={moves[squareType]} />)
        })}
      </SquareContainer>
      <PieceContainer>
        {pieces.map(piece=> (
          <Piece key={piece} piece={piece} setPiece={setSelectedPiece} />
        ))}
      </PieceContainer>
    </div>
  );
}

export default App;

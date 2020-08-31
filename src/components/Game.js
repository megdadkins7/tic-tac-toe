import React, { useState } from "react";
import styled from "styled-components";

//components
import Board from "./Board";

//helpers
import { calculateWinner } from "../helpers";

const StyledGame = styled.div`
  display: grid;
  grid-template: 1fr;
  justify-content: center;
  text-align: center;
`;

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  return (
    <StyledGame>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </StyledGame>
  );
};
export default Game;

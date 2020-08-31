import React from "react";
import styled from "styled-components";

//components
import Square from "./Square";

const StyledBoard = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  margin: 50px auto;
  width: 500px;
  height: 500px;
  border: 3px solid darkblue;
  border-radius: 10px;
`;

const Board = ({ squares, onClick }) => {
  return (
    <StyledBoard>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </StyledBoard>
  );
};
export default Board;

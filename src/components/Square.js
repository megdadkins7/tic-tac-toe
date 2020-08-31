import React from "react";
import styled from "styled-components";

const StyledSquare = styled.button`
  border: 1px solid darkblue;
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
  outline: none;
  border-radius: 6px;
`;

const Square = ({ onClick, value }) => {
  return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
};

export default Square;

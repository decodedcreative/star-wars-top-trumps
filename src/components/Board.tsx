import { ReactNode } from "react";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

interface BoardProps {
  children?: ReactNode;
}

const Board = ({ children }: BoardProps) => (
  <StyledBoard>{children}</StyledBoard>
);

export default Board;

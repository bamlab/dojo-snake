import { GRID_SIZE } from '../constants';

export const useBoard = ({
  height, width, head, tail,
}) => {
  const boardSize = Math.min(height, width);

  const cellSize = boardSize / GRID_SIZE;

  const computePosition = ({ left, top }) => ({
    left: left * cellSize, top: top * cellSize,
  });

  const headPosition = computePosition(head);
  const tailCells = tail.map(computePosition);

  return {
    cellSize, boardSize, headPosition, tailCells,
  };
};

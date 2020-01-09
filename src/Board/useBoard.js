import { useGameLoop } from './useGameLoop';

export const useBoard = ({ height, width }) => {
  const boardSize = Math.min(height, width);
  const GRID_SIZE = 30;
  const cellSize = boardSize / GRID_SIZE;

  const computePosition = ({ left, top }) => ({
    left: left * cellSize, top: top * cellSize,
  });
  const { head, tail } = useGameLoop(GRID_SIZE);
  const headPosition = computePosition(head);
  const tailCells = tail.map(computePosition);

  return {
    cellSize, boardSize, headPosition, tailCells,
  };
};

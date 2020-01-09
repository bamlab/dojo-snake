import { useGameLoop } from './useGameLoop';

export const useBoard = ({ height, width }) => {
  const boardSize = Math.min(height, width);
  const GRID_SIZE = 15;
  const cellSize = boardSize / GRID_SIZE;

  const { head } = useGameLoop(GRID_SIZE);
  const headPosition = { top: head.top * cellSize, left: head.left * cellSize };

  return { cellSize, boardSize, headPosition };
};

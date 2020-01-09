export const useBoard = ({ height, width }) => {
  const boardSize = Math.min(height, width);
  const GRID_SIZE = 15;
  const cellSize = boardSize / GRID_SIZE;

  return { cellSize, boardSize };
};

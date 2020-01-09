import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBoard } from './useBoard';

const Cell = ({ size, position }) => (
  <View style={[styles.cell, {
    height: size, width: size, ...position,
  }]}
  />
);

export const Board = ({ height, width }) => {
  const {
    cellSize, boardSize, headPosition, tailCells,
  } = useBoard({ height, width });

  return (
    <View style={[styles.container, {
      height, width,
    }]}
    >
      <View style={[styles.board, { height: boardSize, width: boardSize }]}>
        <Cell size={cellSize} position={headPosition} />
        {tailCells.map((position) => (
          <Cell size={cellSize} position={position} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    backgroundColor: 'black',
  },
  cell: {
    backgroundColor: 'green', position: 'absolute',
  },
});

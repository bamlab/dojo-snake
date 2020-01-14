import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBoard } from './useBoard';

const Cell = ({ size, position, isApple }) => (
  <View style={[styles.cell, {
    height: size, width: size, ...position, backgroundColor: isApple ? 'red' : 'green',
  }]}
  />
);

export const Board = ({
  height, width, head, tail, apple,
}) => {
  const {
    cellSize, boardSize, headPosition, tailCells, applePosition,
  } = useBoard({
    height, width, head, tail, apple,
  });

  return (
    <View style={[styles.container, {
      height, width,
    }]}
    >
      <View style={[styles.board, { height: boardSize, width: boardSize }]}>
        <Cell size={cellSize} position={applePosition} isApple />
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
    position: 'absolute',
  },
});

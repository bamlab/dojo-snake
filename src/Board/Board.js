import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBoard } from './useBoard';

const Cell = ({ size }) => (
  <View style={[styles.cell, {
    height: size, width: size,
  }]}
  />
);

export const Board = ({ height, width }) => {
  const { cellSize, boardSize } = useBoard({ height, width });

  return (
    <View style={[styles.container, {
      height, width,
    }]}
    >
      <View style={[styles.board, { height: boardSize, width: boardSize }]}><Cell size={cellSize} /></View>
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

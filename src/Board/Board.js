import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBoard } from './useBoard';

const Cell = ({ size, position, isApple }) => (
  <View
    style={[
      styles.cell,
      {
        height: size,
        width: size,
        ...position,
        backgroundColor: isApple ? 'red' : 'green',
      },
    ]}
  />
);

/**
 * height is the height of the component
 * width is the width of the component
 * head is the position of the head of the snake
 * tail is a list of position for every cell of the snake's tail
 * apple is the position of the apple
 */
export const Board = ({ height, width, head, tail, apple }) => {
  const { cellSize, boardSize, headPosition, tailCells, applePosition } = useBoard({
    height,
    width,
    head,
    tail,
    apple,
  });

  return (
    <View
      style={[
        styles.container,
        {
          height,
          width,
        },
      ]}
    >
      <View style={[styles.board, { height: boardSize, width: boardSize }]}>
        <Cell size={cellSize} position={applePosition} isApple />
        <Cell size={cellSize} position={headPosition} />
        {tailCells.map((position, index) => (
          <Cell size={cellSize} position={position} key={index} />
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
    borderColor: 'red',
    borderWidth: 1,
  },
  cell: {
    position: 'absolute',
  },
});

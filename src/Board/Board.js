import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useBoard } from './useBoard';

export const Board = ({ height, width }) => {
  const {} = useBoard();

  return (<View style={[styles.container, { height, width }]} />);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

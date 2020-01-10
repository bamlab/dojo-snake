import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHome } from './useHome';
import { Board } from '../Board/Board';

export const Home = () => {
  const {
    height, width, tail, head,
  } = useHome();

  return (
    <View style={styles.container}>
      <Board height={height / 2} width={width} head={head} tail={tail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

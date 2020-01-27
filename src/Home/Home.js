import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHome } from './useHome';
import { Board } from '../Board/Board';
import { Controls } from '../Controls/Controls';

export const Home = () => {
  const {
    height, width, tail, head, goDown, goLeft, goRight, goUp, apple,
  } = useHome();

  return (
    <View style={styles.container}>
      <Board height={height / 2} width={width} head={head} tail={tail} apple={apple} />
      <Controls goLeft={goLeft} goRight={goRight} goUp={goUp} goDown={goDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

import React from 'react';
import { StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useHome } from './useHome';
import { Board } from '../Board/Board';
import { Controls } from '../Controls/Controls';

export const Home = () => {
  const {
    height, width, tail, head, goDown, goLeft, goRight, goUp, apple,
  } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <Board height={height / 2} width={width} head={head} tail={tail} apple={apple} />
      <Controls goUp={() => Alert.alert('Test')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

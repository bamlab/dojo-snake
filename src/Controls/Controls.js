import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DirectionButton } from './DirectionButton';

export const Controls = ({ goRight, goLeft, goUp, goDown }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <DirectionButton onPress={goUp} />
    </View>
    <View style={styles.center}>
      <DirectionButton onPress={goLeft} />
      <DirectionButton onPress={goRight} />
    </View>
    <View style={styles.bottom}>
      <DirectionButton onPress={goDown} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DirectionButton } from './DirectionButton';

export const Controls = ({ goRight, goLeft, goUp, goDown }) => (
  <View style={styles.container}>
    <View style={styles.endRow}>
      <DirectionButton onPress={goUp} />
    </View>
    <View style={styles.centerRow}>
      <DirectionButton onPress={goLeft} />
      <DirectionButton onPress={goRight} />
    </View>
    <View style={styles.endRow}>
      <DirectionButton onPress={goDown} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  endRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

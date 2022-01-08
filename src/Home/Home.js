import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NOKIA_COLOR } from '../theme';
import { useLockOrientation } from '../utils/useLockOrientation';

export const Home = () => {
  useLockOrientation();

  return <SafeAreaView style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NOKIA_COLOR,
    padding: 10,
  },
});

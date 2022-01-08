import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

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

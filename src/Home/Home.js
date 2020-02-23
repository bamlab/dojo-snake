import React from 'react';
import {
  StyleSheet, SafeAreaView,
} from 'react-native';
import { useHome } from './useHome';

export const Home = () => {
  const {
    height, width, head, tail, apple,
  } = useHome();

  return (
    <SafeAreaView style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    padding: 20,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

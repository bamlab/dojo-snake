import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { NOKIA_COLOR } from '../theme';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is a snake to be </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NOKIA_COLOR,
    padding: 10,
  },
});

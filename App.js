import React from 'react';
import {
  StyleSheet, View, StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1 },
});

import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { NOKIA_COLOR } from '../theme';

export const ScoreModal = ({ visible, close, scores }) => {
  return (
    <SafeAreaView style={styles.modal}>
      <Text style={styles.title}>Meilleurs scores</Text>
      <ScrollView style={styles.list}>
        {scores
          ?.filter(({ score }) => score > 0)
          ?.sort((line1, line2) => line2.score - line1.score)
          .map(({ score, name, time }, index) => (
            <Text style={styles.line} key={time} numberOfLines={1}>
              {index + 1} - {new Date(time).toLocaleTimeString('fr')} - {name} - {score}
            </Text>
          ))}
      </ScrollView>
      <Button title={'Fermer les scores'} onPress={close} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    zIndex: 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: NOKIA_COLOR,
    paddingVertical: 20,
  },
  list: {
    flex: 1,
    paddingHorizontal: 30,
  },
  line: {
    color: NOKIA_COLOR,
    fontSize: 18,
    paddingVertical: 10,
  },
  name: {
    flex: 1,
  },
});

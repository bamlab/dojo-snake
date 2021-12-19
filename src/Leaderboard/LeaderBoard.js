import React from 'react';
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';

const ScoreLine = ({ name, score }) => (
  <View style={styles.container}>
    <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.name, styles.text]}>
      {name}
    </Text>
    <Text numberOfLines={1} style={styles.text}>
      {score}
    </Text>
  </View>
);

export const LeaderBoard = ({ scores, startGame }) => (
  <>
    <FlatList
      data={scores}
      renderItem={({ item }) => <ScoreLine name={item.name} score={item.score} />}
    />
    <Button title="Rejouer" onPress={startGame} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'white',
    borderWidth: 1,
  },
  name: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
});

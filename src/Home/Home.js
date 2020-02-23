import React from 'react';
import {
  StyleSheet, Alert, SafeAreaView, TextInput, View, Button,
} from 'react-native';
import { useHome } from './useHome';
import { Board } from '../Board/Board';
import { Controls } from '../Controls/Controls';
import { LeaderBoard } from '../Leaderboard/LeaderBoard';

export const Home = () => {
  const {
    height,
    width,
    tail,
    head,
    goDown,
    goLeft,
    goRight,
    goUp,
    apple,
    setName,
    updateScores,
    userState,
    startGame,
    scores,
  } = useHome();

  return (
    <SafeAreaView style={styles.container}>
      {userState === 'PLAYING' && (
        <>
          <Board height={height / 2} width={width} head={head} tail={tail} apple={apple} />
          <Controls goUp={goUp} goDown={goDown} goLeft={goLeft} goRight={goRight} />
        </>
      )}
      {userState === 'TYPING_NAME' && (
      <View style={styles.inputContainer}>
        <TextInput style={{ height: 40 }} placeholder="Tape ton nom" onChangeText={((newName) => setName(newName))} />
        <Button title="Valider" onPress={updateScores} />
      </View>
      )}
      {userState === 'SHOWING_SCORES' && (
        <LeaderBoard scores={scores} startGame={startGame} />
      )}
    </SafeAreaView>
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

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, Alert, Button } from 'react-native';
import { NOKIA_COLOR } from '../theme';
import { Board } from '../Board/Board';
import { Controls } from '../Controls/Controls';
import { useGameLoop } from './useGameLoop';
import { GameOverMessage } from './GameOverMessage';
import { ScoreModal } from '../Score/ScoreModal';
import { ScoreBand } from '../Score/ScoreBand';
import { useScores } from '../Score/useScores';

export const Home = () => {
  const [name, setName] = useState('DEFAULTNAME');
  const { fetchScores, scores, sendScore } = useScores(name);
  const { head, tail, apple, relaunch, goRight, goLeft, goUp, goDown, running, score } =
    useGameLoop(sendScore);

  const [scoreBoardVisible, setScoreBoardVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScoreBand score={score} name={name} setName={setName} />
      <Board size={300} head={head} tail={tail} apple={apple} />
      {!running && <GameOverMessage />}
      <Controls goDown={goDown} goLeft={goLeft} goUp={goUp} goRight={goRight} />
      <Button title="Relancer une partie" onPress={relaunch} disabled={running} />
      <Button
        title="Meilleurs scores"
        onPress={async () => {
          await fetchScores();
          setScoreBoardVisible(true);
        }}
      />
      {scoreBoardVisible && (
        <ScoreModal close={() => setScoreBoardVisible(false)} scores={scores} />
      )}
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

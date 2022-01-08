import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { Board } from '../Board/Board';
import { Controls } from '../Controls/Controls';
import { ScoreBand } from '../Score/ScoreBand';
import { ScoreModal } from '../Score/ScoreModal';
import { GameOverMessage } from './GameOver';
import { NOKIA_COLOR } from '../theme';
import { getScreenDimension } from '../utils/getScreenDimension';
import { useLockOrientation } from '../utils/useLockOrientation';
import { useGameLoop } from './useGameLoop';
import { useScores } from '../Score/useScores';

export const Home = () => {
  useLockOrientation();

  const [scoreModalVisible, setScoreModalVisible] = useState(false);
  const [userName, setUserName] = useState('[DEFAULT]');
  const { screenWidth } = getScreenDimension();

  const { scores, fetchScores, sendScore } = useScores();

  const { head, tail, apple, goDown, goLeft, goUp, goRight, running, relaunch, score } =
    useGameLoop(userName, sendScore);

  return (
    <SafeAreaView style={styles.container}>
      <ScoreBand score={score} name={userName} setName={setUserName} />
      <Board size={screenWidth - 50} tail={tail} apple={apple} head={head} />
      <Controls goDown={goDown} goLeft={goLeft} goUp={goUp} goRight={goRight} />
      <Button onPress={relaunch} title={'Relancer une partie'} disabled={running} />
      {!running && <GameOverMessage />}
      <Button
        title={'Voir les meilleurs scores'}
        onPress={() => {
          fetchScores();
          setScoreModalVisible(true);
        }}
      />
      <ScoreModal
        visible={scoreModalVisible}
        close={() => setScoreModalVisible(false)}
        scores={scores}
      />
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

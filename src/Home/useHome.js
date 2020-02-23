import { useEffect, useState } from 'react';
import { ScreenOrientation } from 'expo';
import { Dimensions } from 'react-native';
import { useGameLoop } from './useGameLoop';

export const useHome = () => {
  // Retrieve screen height and widtth
  const { height, width } = Dimensions.get('window');

  const [name, setName] = useState('');
  const [scores, setScore] = useState([]);

  const [userState, setUserState] = useState('PLAYING');

  const {
    head,
    tail,
    goDown,
    goLeft,
    goRight,
    goUp,
    apple,
    start,
    running,
  } = useGameLoop();

  const updateScores = () => {
    setScore((currentScores) => {
      currentScores.push({ name, score: tail.length + 1 });
      return currentScores.sort((a, b) => a.score > b.score);
    });
    setUserState('SHOWING_SCORES');
  };

  useEffect(() => {
    if (running === false) {
      setUserState('TYPING_NAME');
    }
  }, [running]);

  const startGame = () => {
    setUserState('PLAYING');
    start();
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return {
    height,
    width,
    head,
    tail,
    goDown,
    goLeft,
    goRight,
    goUp,
    apple,
    name,
    setName,
    updateScores,
    userState,
    setUserState,
    startGame,
    scores,
  };
};

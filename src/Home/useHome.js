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
    apple,
  } = useGameLoop();

  const updateScores = () => {
    setScore((currentScores) => {
      currentScores.push({ name, score: tail.length + 1 });
      return currentScores.sort((a, b) => a.score > b.score);
    });
    setUserState('SHOWING_SCORES');
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

  return {
    height,
    width,
    head,
    tail,
    apple,
    name,
    setName,
    updateScores,
    userState,
    setUserState,
    scores,
  };
};

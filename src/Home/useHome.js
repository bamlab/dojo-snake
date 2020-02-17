import { useEffect } from 'react';
import { ScreenOrientation } from 'expo';
import { Dimensions } from 'react-native';
import { useGameLoop } from './useGameLoop';

export const useHome = () => {
  // Retrieve screen height and widtth
  const { height, width } = Dimensions.get('window');

  const {
    head, tail, setRunning, goDown, goLeft, goRight, goUp, apple,
  } = useGameLoop();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return {
    height, width, head, tail, setRunning, goDown, goLeft, goRight, goUp, apple,
  };
};

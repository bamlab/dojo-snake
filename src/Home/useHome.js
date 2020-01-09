import { useEffect } from 'react';
import { ScreenOrientation } from 'expo';
import { Dimensions } from 'react-native';

export const useHome = () => {
  const { height, width } = Dimensions.get('window');

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return { height, width };
};

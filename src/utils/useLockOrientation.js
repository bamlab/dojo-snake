import { useEffect, useState } from 'react';
import { ScreenOrientation } from 'expo';
import { Dimensions } from 'react-native';
import { useGameLoop } from '../Home/useGameLoop';

export const useLockOrientation = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
};

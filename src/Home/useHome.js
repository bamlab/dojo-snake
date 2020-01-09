import { useEffect } from 'react';
import { ScreenOrientation } from 'expo';

export const useHome = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
  return {};
};

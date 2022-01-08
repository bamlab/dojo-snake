import { ScreenOrientation } from 'expo';
import { useEffect } from 'react';

export const useLockOrientation = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);
};

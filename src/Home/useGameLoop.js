import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { GRID_SIZE } from '../constants';

const LOOP_INTERVAL = 200;

const initialTail = [{ left: 0, top: 0 }, { left: 1, top: 0 }];
const initialHead = { left: 2, top: 0 };

export const useGameLoop = () => {
  const [head, setHead] = useState(initialHead);
  const [tail, setTail] = useState(initialTail);
  const [xSpeed, setXSpeed] = useState(1);
  const [ySpeed, setYSpeed] = useState(0);

  const reset = () => {
    setRunning(false);
    setHead(initialHead);
    setTail(initialTail);
    setXSpeed(1);
    setYSpeed(0);
    Alert.alert('Game over', 'You lame loser', [{
      text: 'Retry',
      onPress: () => setRunning(true),
    }]);
  };

  const goLeft = () => {
    if (xSpeed !== -1 && xSpeed !== 1) {
      setXSpeed(-1);
      setYSpeed(0);
    }
  };
  const goRight = () => {
    if (xSpeed !== -1 && xSpeed !== 1) {
      setXSpeed(1);
      setYSpeed(0);
    }
  };
  const goUp = () => {
    if (ySpeed !== -1 && ySpeed !== 1) {
      setXSpeed(0);
      setYSpeed(-1);
    }
  };
  const goDown = () => {
    if (ySpeed !== -1 && ySpeed !== 1) {
      setXSpeed(0);
      setYSpeed(1);
    }
  };

  const [running, setRunning] = useState(true);

  const computeNextHead = () => {
    if (running) {
      const nextHead = { top: head.top + ySpeed, left: head.left + xSpeed };
      if (nextHead.top >= GRID_SIZE || nextHead.left >= GRID_SIZE || nextHead.top < 0 || nextHead.left < 0) {
        reset();
        return;
      }
      setTail((currentTail) => {
        const [_, ...rest] = currentTail;
        return [...rest, head];
      });
      setHead((currentHead) => ({ top: currentHead.top + ySpeed, left: currentHead.left + xSpeed }));
    }
  };

  useEffect(() => {
    setTimeout(
      computeNextHead,
      LOOP_INTERVAL,
    );
  }, [head, running]);

  return {
    head, tail, setRunning, goDown, goLeft, goRight, goUp,
  };
};

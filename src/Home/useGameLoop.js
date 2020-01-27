import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { GRID_SIZE } from '../constants';

const LOOP_INTERVAL = 100;

const initialTail = [
  { left: 0, top: 0 },
  { left: 1, top: 0 },

];
const initialHead = { left: 2, top: 0 };
const initialApple = { left: 10, top: 10 };

const areSamePosition = ({ top, left }, { top: top2, left: left2 }) => top === top2 && left === left2;
const isIncludedInArray = ({ top, left }, list) => {
  for (const element of list) {
    if (top === element.top && left === element.left) return true;
  }
  return false;
};

export const useGameLoop = () => {
  const [head, setHead] = useState(initialHead);
  const [tail, setTail] = useState(initialTail);
  const [xSpeed, setXSpeed] = useState(1);
  const [ySpeed, setYSpeed] = useState(0);
  const [hasAlreadyTurned, setHasAlreadyTurned] = useState(false);

  const [apple, setApple] = useState(initialApple);
  const generateApple = () => {
    const appleTop = Math.floor(Math.random() * (GRID_SIZE - 1));
    const appleLeft = Math.floor(Math.random() * (GRID_SIZE - 1));
    setApple({ top: appleTop, left: appleLeft });
  };

  const reset = () => {
    setRunning(false);
    setHead(initialHead);
    setTail(initialTail);
    setXSpeed(1);
    setYSpeed(0);
    Alert.alert('Game over', 'You lame loser', [
      {
        text: 'Retry',
        onPress: () => setRunning(true),
      },
    ]);
  };

  const goLeft = () => {
    if (xSpeed !== -1 && xSpeed !== 1 && !hasAlreadyTurned) {
      setXSpeed(-1);
      setYSpeed(0);
      setHasAlreadyTurned(true);
    }
  };
  const goRight = () => {
    if (xSpeed !== -1 && xSpeed !== 1 && !hasAlreadyTurned) {
      setXSpeed(1);
      setYSpeed(0);
      setHasAlreadyTurned(true);
    }
  };
  const goUp = () => {
    if (ySpeed !== -1 && ySpeed !== 1 && !hasAlreadyTurned) {
      setXSpeed(0);
      setYSpeed(-1);
      setHasAlreadyTurned(true);
    }
  };
  const goDown = () => {
    if (ySpeed !== -1 && ySpeed !== 1 && !hasAlreadyTurned) {
      setXSpeed(0);
      setYSpeed(1);
      setHasAlreadyTurned(true);
    }
  };

  const [running, setRunning] = useState(true);

  const computeNextHead = () => {
    if (running) {
      setHasAlreadyTurned(false);
      const nextHead = { top: head.top + ySpeed, left: head.left + xSpeed };
      const shouldGrow = areSamePosition(nextHead, apple);
      if (
        nextHead.top >= GRID_SIZE
        || nextHead.left >= GRID_SIZE
        || nextHead.top < 0
        || nextHead.left < 0
      ) {
        reset();
        return;
      }
      if (isIncludedInArray(nextHead, tail)) {
        reset();
        return;
      }
      setTail((currentTail) => {
        if (shouldGrow) return [...currentTail, head];
        const [_, ...rest] = currentTail;
        return [...rest, head];
      });
      setHead((currentHead) => ({
        top: currentHead.top + ySpeed,
        left: currentHead.left + xSpeed,
      }));
      if (shouldGrow) generateApple();
    }
  };

  useEffect(() => {
    setTimeout(computeNextHead, LOOP_INTERVAL);
  }, [head, running]);

  return {
    head,
    tail,
    setRunning,
    goDown,
    goLeft,
    goRight,
    goUp,
    apple,
  };
};

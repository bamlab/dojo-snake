import { useState, useEffect } from 'react';

const LOOP_INTERVAL = 200;

const initialTail = [{ left: 0, top: 0 }, { left: 1, top: 0 }];
const initialHead = { left: 2, top: 0 };

export const useGameLoop = () => {
  const [head, setHead] = useState(initialHead);
  const [tail, setTail] = useState(initialTail);
  const [xSpeed, setXSpeed] = useState(1);
  const [ySpeed, setYSpeed] = useState(0);
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

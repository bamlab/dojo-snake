import { useState, useEffect } from 'react';

const LOOP_INTERVAL = 200;

const initialTail = [{ left: 0, top: 0 }, { left: 1, top: 0 }];
const initialHead = { left: 2, top: 0 };

export const useGameLoop = (gridSize) => {
  const [head, setHead] = useState(initialHead);
  const [tail, setTail] = useState(initialTail);
  const [xSpeed, setXSpeed] = useState(1);
  const [ySpeed, setYSpeed] = useState(0);

  const computeNextHead = () => {
    setTail((currentTail) => {
      const [_, ...rest] = currentTail;
      return [...rest, head];
    });
    setHead((currentHead) => ({ top: currentHead.top + ySpeed, left: currentHead.left + xSpeed }));
  };

  useEffect(() => {
    setTimeout(
      computeNextHead,
      LOOP_INTERVAL,
    );
  }, [head]);

  return { head, tail };
};

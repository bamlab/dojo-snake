import { useState, useEffect } from 'react';

const LOOP_INTERVAL = 200;

export const useGameLoop = (gridSize) => {
  const [head, setHead] = useState({ left: 0, top: 0 });
  const [xSpeed, setXSpeed] = useState(1);
  const [ySpeed, setYSpeed] = useState(0);

  const computeNextHead = () => {
    setHead((currentHead) => ({ top: currentHead.top + ySpeed, left: currentHead.left + xSpeed }));
  };

  useEffect(() => {
    setTimeout(
      computeNextHead,
      LOOP_INTERVAL,
    );
  }, [head]);

  return { head };
};

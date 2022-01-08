import React, { useState } from 'react';

const SCORE_DB_ROOT = 'https://dojo-snake-default-rtdb.europe-west1.firebasedatabase.app';

export const useScores = () => {
  const [scores, setScores] = useState([]);

  const fetchScores = async () => {
    try {
      // Retrieve all the existing scores !
      const response = await fetch(`${SCORE_DB_ROOT}/scores.json`);
      const rawScores = await response.json();
      const adaptedScores = Object.values(rawScores);
      if (adaptedScores) {
        setScores(adaptedScores);
      }
    } catch (e) {
      console.error('Something wrong happened :', e);
    }
  };

  const sendScore = scoreLine => {
    // Send your score to the server !
    fetch(`${SCORE_DB_ROOT}/scores/${scoreLine.time}.json`, {
      method: 'PATCH',
      body: JSON.stringify(scoreLine),
    });
  };

  return { fetchScores, scores, sendScore };
};

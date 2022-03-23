import React, { useState } from 'react';

const SCORE_DB_ROOT = 'https://dojo-snake-default-rtdb.europe-west1.firebasedatabase.app';

export const useScores = name => {
  const [scores, setScores] = useState([]);

  const fetchScores = async name => {
    try {
      // Retrieve all the existing scores !
      const response = await fetch(SCORE_DB_ROOT + '/scores.json');
      const rawScores = await response.json();
      const adaptedScores = Object.values(rawScores);
      setScores(adaptedScores);
    } catch (e) {
      console.error('Something wrong happened :', e);
    }
  };

  const sendScore = score => {
    const time = Date.now();
    const scoreLine = { score, name, time };
    try {
      // Send your score to the server !
      fetch(`${SCORE_DB_ROOT}/scores/${time}.json`, {
        method: 'PUT',
        body: JSON.stringify(scoreLine),
      });
    } catch (e) {
      console.error('Something wrong happened :', e);
    }
  };

  return { fetchScores, scores, sendScore };
};

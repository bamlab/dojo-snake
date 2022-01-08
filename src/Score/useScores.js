import React, { useState } from 'react';

const SCORE_DB_ROOT = 'https://dojo-snake-default-rtdb.europe-west1.firebasedatabase.app';

export const useScores = () => {
  const [scores, setScores] = useState([]);

  const fetchScores = async () => {
    try {
      // Retrieve all the existing scores !
    } catch (e) {
      console.error('Something wrong happened :', e);
    }
  };

  const sendScore = scoreLine => {
    // Send your score to the server !
  };

  return { fetchScores, scores, sendScore };
};

export const useScore = () => {
  const [name, setName] = useState('');

  const [scores, setScore] = useState([]);

  const updateScores = () => {
    setScore(currentScores => {
      currentScores.push({ name, score: tail.length + 1 });
      return currentScores.sort((a, b) => a.score > b.score);
    });

    setUserState('SHOWING_SCORES');
  };
};

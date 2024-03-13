interface FinishScreenProps {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
}

const FinishScreen: React.FC<FinishScreenProps> = ({
  points,
  maxPossiblePoints,
  highscore,
}) => {
  const mathPercentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (mathPercentage < 50) {
    emoji = "😢";
  } else if (mathPercentage < 70) {
    emoji = "😊";
  } else {
    emoji = "🤩";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} {Math.ceil(mathPercentage)}%.
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
};

export default FinishScreen;

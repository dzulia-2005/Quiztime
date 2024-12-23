import React from "react";

interface ResultCardProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
}

const ResultCard: React.FC<ResultCardProps> = ({
  score,
  correctAnswers,
  totalQuestions,
}) => {
  return (
    <div className="result-container">
      <div className="result-card">
        <h1 className="result-title">შენი შედეგი</h1>
        <p className="result-score">
          {score} ქულა / {totalQuestions * 100} ქულიდან
        </p>
        <p className="correct-answers">
          სწორად პასუხები: {correctAnswers}/{totalQuestions}
        </p>
        <button
          className="retry-button"
          onClick={() => window.location.reload()}
        >
          თავიდან დაწყება
        </button>
      </div>
    </div>
  );
};

export default ResultCard;

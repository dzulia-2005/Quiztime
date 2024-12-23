import React from "react";

interface ProgressBarProps {
  progress: number;
  currentQuestion: number;
  totalQuestions: number;
  onContinue: () => void;
  isContinueDisabled: boolean;
  isLastQuestion: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentQuestion,
  totalQuestions,
  onContinue,
  isContinueDisabled,
  isLastQuestion,
}) => {
  return (
    <div className="progress-section">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-info">
        <span className="progress-text">
          {currentQuestion}/{totalQuestions}
        </span>
        <button
          className={`continue-button ${
            isContinueDisabled ? "disabled" : "enabled"
          }`}
          onClick={onContinue}
          disabled={isContinueDisabled}
        >
          {isLastQuestion ? "დასრულება" : "გაგრძელება"}
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;

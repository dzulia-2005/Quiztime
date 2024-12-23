import React from "react";

interface AnswerButtonProps {
  variant: { id: number; name: string; isCorrect: boolean };
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  variant,
  isSelected,
  onClick,
  label,
}) => {
  return (
    <button
      className={`answer-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="answer-label">{label}</span>
      {variant.name}
    </button>
  );
};

export default AnswerButton;

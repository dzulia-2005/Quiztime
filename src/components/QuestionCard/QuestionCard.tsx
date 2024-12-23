import React from "react";
import AnswerButton from "../AnswerButton/AnswerButton";

interface QuestionCardProps {
  question: {
    name: string;
    variants: { id: number; name: string; isCorrect: boolean }[];
  };
  selectedAnswer: number | null;
  onSelectAnswer: (id: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <div className="quiz-card">
      <h1 className="quiz-header">QuizTime</h1>
      <div className="quiz-question">
        <h2 className="question-title">{question.name}</h2>
      </div>
      <div className="answer-list">
        {question.variants.map((variant, index) => (
          <AnswerButton
            key={variant.id}
            variant={variant}
            isSelected={selectedAnswer === variant.id}
            onClick={() => onSelectAnswer(variant.id)}
            label={String.fromCharCode(65 + index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

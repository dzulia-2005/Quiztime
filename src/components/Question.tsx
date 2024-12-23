import React from "react";
import { Questions } from "../data/data";

interface QuestionProps {
  question: Questions;
  onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.name}</h2>
      {question.variants.map((variant) => (
        <button
          key={variant.id}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f9f9f9",
          }}
          onClick={() => onAnswer(variant.isCorrect)}
        >
          {variant.name}
        </button>
      ))}
    </div>
  );
};

export default Question;

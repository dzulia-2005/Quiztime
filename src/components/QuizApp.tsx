import React, { useState } from "react";
import { quiz } from "../data/data";
import Question from "./Question";
import ProgressBar from "./ProgressBar";

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + quiz.questions[currentQuestion].score);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{quiz.name}</h1>
      {!isFinished ? (
        <>
          <Question
            question={quiz.questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
          <ProgressBar
            current={currentQuestion + 1}
            total={quiz.questions.length}
          />
        </>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;

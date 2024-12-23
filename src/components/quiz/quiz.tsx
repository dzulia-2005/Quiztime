import React, { useState } from "react";
import { quiz } from "../../data/data"; 
import QuestionCard from "../QuestionCard/QuestionCard";
import ProgressBar from "../ProgressBar/ProgressBar";
import ResultCard from "../ResultCard/ResultCard";
import "./quiz.css";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (id: number) => {
    setSelectedAnswer(id);
  };

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      const selectedVariant = currentQuestion.variants.find(
        (variant) => variant.id === selectedAnswer
      );

      if (selectedVariant?.isCorrect) {
        setScore((prevScore) => prevScore + currentQuestion.score);
        setCorrectAnswers((prevCount) => prevCount + 1);
      }

      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  if (showResult) {
    return (
      <ResultCard
        score={score}
        correctAnswers={correctAnswers}
        totalQuestions={quiz.questions.length}
      />
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
        />
      </div>
      <ProgressBar
        progress={progress}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
        onContinue={handleContinue}
        isContinueDisabled={selectedAnswer === null}
        isLastQuestion={currentQuestionIndex === quiz.questions.length - 1}
      />
    </div>
  );
};

export default Quiz;

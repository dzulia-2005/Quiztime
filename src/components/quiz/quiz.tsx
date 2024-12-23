import React, { useState } from "react";
import { questions } from "../../dummy-data";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].trueAnswer) {
      setScore((prev) => prev + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div>
        <h2>შენი შედეგი: {score} / {questions.length}</h2>
        <button onClick={() => window.location.reload()}>თავიდან დაწყება</button>
      </div>
    );
  }

  return (
      <div>  
         <h2>{questions[currentQuestion].question}</h2>
          <div style={{display:"flex" , flexDirection:"column" , gap:"10px"}}>
             {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
            ))}
           </div>
     </div>
  );
};

export default Quiz;

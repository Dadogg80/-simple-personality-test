// src/components/Quiz.tsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Answer } from "../interfaces/Answer";
import { Question } from "../interfaces/Question";
import { setAnswers } from "../store/quizSlice";

interface Props {
  questions: Question[];
}

const Quiz: React.FC<Props> = ({ questions }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelected = (answerId: string) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = answerId;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      dispatch(setAnswers(selectedAnswers));
      history.push("/result");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      <Question
        question={currentQuestion.question}
        answers={currentQuestion.answers}
        onAnswerSelected={handleAnswerSelected}
      />
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;




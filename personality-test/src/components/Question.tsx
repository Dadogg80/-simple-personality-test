// src/components/Question.tsx

import React from "react";
import { Answer } from "../interfaces/Answer";

interface Props {
  question: string;
  answers: Answer[];
  onAnswerSelected: (answerId: string) => void;
}

const Question: React.FC<Props> = ({ question, answers, onAnswerSelected }) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            <input
              type="radio"
              name="answer"
              id={answer.id}
              value={answer.id}
              onChange={() => onAnswerSelected(answer.id)}
            />
            <label htmlFor={answer.id}>{answer.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

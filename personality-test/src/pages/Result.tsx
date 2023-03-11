// src/pages/Result.tsx

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const Result: React.FC = () => {
  const answers = useSelector((state: RootState) => state.quiz.answers);

  const introvertScore = answers.filter((answer) => answer === "a").length;
  const extrovertScore = answers.filter((answer) => answer === "b").length;

  const personalityTrait = introvertScore > extrovertScore ? "Introvert" : "Extrovert";

  return (
    <div>
      <h1>Your Personality Trait is:</h1>
      <h2>{personalityTrait}</h2>
    </div>
  );
};

export default Result;
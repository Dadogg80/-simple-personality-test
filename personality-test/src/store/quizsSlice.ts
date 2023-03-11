// src/store/quizSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  answers: string[];
}

const initialState: QuizState = {
  answers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
  },
});

export const { setAnswers } = quizSlice.actions;

export default quizSlice.reducer;

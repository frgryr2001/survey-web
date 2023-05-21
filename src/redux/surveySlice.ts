import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SurveyState {
  survey: SurveyQuestion[];
}

interface SurveyQuestion {
  questionId: number;
  answer: string | string[];
}

interface SaveAnswerPayload {
  questionId: number;
  answer: string | string[];
}

const initialState: SurveyState = {
  survey: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<SaveAnswerPayload>) => {
      const { questionId, answer } = action.payload;

      const questionIndex = state.survey.findIndex(
        (q) => q.questionId === questionId
      );

      if (questionIndex !== -1) {
        state.survey[questionIndex].answer = answer;
      } else {
        state.survey.push({
          questionId: questionId,
          answer: answer,
        });
      }
    },
  },
});

export const { saveAnswer } = surveySlice.actions;
export default surveySlice.reducer;

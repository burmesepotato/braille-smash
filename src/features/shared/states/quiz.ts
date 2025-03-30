import { atom } from "recoil";

interface QuizGameState {
  isPause: boolean;
  score: number;
}

export const quizGameState = atom<QuizGameState>({
  key: "quizGameState",
  default: {
    isPause: false,
    score: 0,
  },
});

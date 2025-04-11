import { atom } from "recoil";

interface QuizGameState {
  // isGameOver: boolean;
  isPause: boolean;
  score: number;
}

export const quizGameState = atom<QuizGameState>({
  key: "quizGameState",
  default: {
    // isGameOver: false,
    isPause: false,
    score: 0,
  },
});

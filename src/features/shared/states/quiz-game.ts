import { atom } from "recoil";
import { GameDifficulty } from "../types";

interface QuizGameState {
  difficulty: GameDifficulty;
  isGameOver: boolean;
  isPaused: boolean;
  score: number;
}

export const quizGameState = atom<QuizGameState>({
  key: "quizGameState",
  default: {
    difficulty: "EASY",
    isGameOver: false,
    isPaused: false,
    score: 0,
  },
});

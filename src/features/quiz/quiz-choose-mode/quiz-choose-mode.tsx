import { GameMode } from "@/features/shared/types";
import { AppButton } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { quizGameState } from "@/features/shared/states";

export const QuizChooseMode = () => {
  const navigate = useNavigate();
  const setQuizGameState = useSetRecoilState(quizGameState);

  const handleSelect = (mode: GameMode) => {
    setQuizGameState({
      difficulty: "MEDIUM",
      isGameOver: false,
      isPaused: false,
      score: 0,
    });
    navigate("/quiz/play", {
      state: { mode },
    });
  };

  return (
    <section className="flex flex-col items-center gap-16 grow justify-center">
      <h1 className="text-4xl font-bold">Choose Game Mode</h1>
      <div className="flex flex-col gap-4">
        <AppButton
          label="Life Smash"
          onClick={() => handleSelect("LIFE")}
          size="lg"
        />
        <AppButton
          label="Timer Smash"
          onClick={() => handleSelect("TIMER")}
          size="lg"
        />
      </div>
    </section>
  );
};

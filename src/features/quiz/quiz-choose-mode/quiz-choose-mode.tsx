import { GameMode } from "@/features/shared/types";
import { AppButton } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export const QuizChooseMode = () => {
  const navigate = useNavigate();

  const handleSelect = (mode: GameMode) => {
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

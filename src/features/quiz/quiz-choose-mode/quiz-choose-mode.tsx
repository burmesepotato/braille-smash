import { GameMode } from "@/features/shared/types";
import { AppButton } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export const QuizChooseMode = () => {
  const navigate = useNavigate();

  const onSelect = (mode: GameMode) => {
    navigate("/quiz/play", {
      state: { mode },
    });
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Choose Game Mode</h1>
      <div className="flex gap-4">
        <AppButton label="Life Smash" onClick={() => onSelect("LIFE")} />
        <AppButton label="Timer Smash" onClick={() => onSelect("TIMER")} />
      </div>
    </section>
  );
};

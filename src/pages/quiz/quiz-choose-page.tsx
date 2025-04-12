import { AppButton, AppNavbar } from "@/components";
import { useNavigate } from "react-router-dom";
import { GameMode } from "@/features/shared/types";

export default function QuizChoosePage() {
  const navigate = useNavigate();

  const handleSelect = (mode: GameMode) => {
    switch (mode) {
      case "LIFE_SMASH":
        navigate("/quiz/life-smash");
        break;
      case "TIMER_SMASH":
        navigate("/quiz/timer-smash");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <div className="flex flex-col min-h-screen">
        <AppNavbar backBtnText="Back to Main Menu" onBack={handleBack} />
        <section className="flex flex-col items-center gap-16 grow justify-center">
          <h1 className="text-4xl font-bold">Choose Game Mode</h1>
          <div className="flex flex-col gap-4">
            {/* <AppButton
              label="Life Smash"
              onClick={() => handleSelect("LIFE_SMASH")}
              size="lg"
            /> */}
            <AppButton
              label="Timer Smash"
              onClick={() => handleSelect("TIMER_SMASH")}
              size="lg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

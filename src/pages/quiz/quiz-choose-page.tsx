import { AppButtonMode, AppNavbar } from "@/components/ui";
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
    <main className="max-w-screen-xl mx-auto">
      <div className="flex flex-col min-h-screen px-8">
        <AppNavbar backBtnText="Main Menu" onBack={handleBack} />
        <section className="flex flex-col items-center gap-16 grow justify-center">
          <h1 className="text-4xl font-bold">Choose Game Mode</h1>
          <div className="flex flex-col gap-4">
            <AppButtonMode
              onClick={() => handleSelect("TIMER_SMASH")}
              title="Timer Smash"
              titleIcon="⏳"
            >
              <div className="text-left text-lg font-light">
                <p>Test your speed and accuracy!</p>
              </div>
            </AppButtonMode>

            <AppButtonMode
              onClick={() => handleSelect("TIMER_SMASH")}
              title="Life Smash"
              titleIcon="💛"
            >
              <div className="text-left text-lg font-light">
                <p>Test how far you can go without running out of lives</p>
              </div>
            </AppButtonMode>
          </div>
        </section>
      </div>
    </main>
  );
}

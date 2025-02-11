import { TimerSmash } from "@/features/quiz";
import { AppButton, AppNavbar } from "@/features/shared/ui";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

export default function QuizPlayPage() {
  const location = useLocation();
  const data = location.state;
  const mode = data.mode;

  const handleBack = () => {
    console.log("Clicked Back");
  };

  const handleSettings = () => {
    console.log("Clicked Settings");
  };

  return (
    <main className="max-w-screen-2xl mx-auto">
      <AppNavbar textBack="Leave Game" onBack={handleBack}>
        <AppButton
          prefixIcon={<Cog6ToothIcon className="size-8" />}
          onClick={handleSettings}
          variant="icon"
        />
      </AppNavbar>
      <div className="px-8 flex flex-col gap-5 min-h-screen">
        {mode === "LIFE" && <div>Life Smash</div>}
        {mode === "TIMER" && <TimerSmash />}
      </div>
    </main>
  );
}

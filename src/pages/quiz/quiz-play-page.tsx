import { TimerSmash } from "@/features/quiz";
import { useLocation } from "react-router-dom";

export default function QuizPlayPage() {
  const location = useLocation();
  const data = location.state;
  const mode = data.mode;

  return (
    <main>
      <div className="max-w-7xl mx-auto py-5 flex flex-col gap-5 min-h-screen">
        {mode === "LIFE" && <div>Life Smash</div>}
        {mode === "TIMER" && <TimerSmash />}
      </div>
    </main>
  );
}

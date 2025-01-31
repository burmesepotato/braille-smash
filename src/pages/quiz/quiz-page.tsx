import { QuizChooseMode } from "@/features/quiz";
import { AppNavbar } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto py-5 flex flex-col gap-5 min-h-screen">
        <AppNavbar onBack={onBack} />
        <QuizChooseMode />
      </div>
    </main>
  );
}

import { QuizChooseMode } from "@/features/quiz";
import { AppNavbar } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export default function QuizChoosePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <div className="flex flex-col min-h-screen">
        <AppNavbar textBack="Back to Main Menu" onBack={handleBack} />
        <QuizChooseMode />
      </div>
    </main>
  );
}

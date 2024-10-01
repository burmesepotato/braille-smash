import { AppNavbar, GameTimer } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto border py-5 flex flex-col gap-5 min-h-screen">
        <AppNavbar onBack={onBack} />
        <div className="flex flex-col items-center">
          <section>Question</section>
          <section>Cell</section>
          <GameTimer seconds={45} />
        </div>
      </div>
    </main>
  );
}

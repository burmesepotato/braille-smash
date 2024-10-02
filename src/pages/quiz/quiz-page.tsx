import { AppNavbar, GameTimer } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";
import { useAlphabet } from "@/features/shared/hooks";
import { GameCell } from "@/features/shared/ui";

export default function QuizPage() {
  const navigate = useNavigate();
  const { getRandomAlphabet } = useAlphabet();

  const alphabet = getRandomAlphabet();
  console.log("random alphabet", alphabet);

  const onBack = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto border py-5 flex flex-col gap-5 min-h-screen">
        <AppNavbar onBack={onBack} />
        <div className="flex flex-col items-center">
          <section>Question</section>
          <section>
            <p className="text-xl font-bold text-center uppercase mb-3">
              {alphabet.letter}
            </p>
            <GameCell cell={alphabet.cell} />
          </section>
          <GameTimer seconds={45} />
        </div>
      </div>
    </main>
  );
}

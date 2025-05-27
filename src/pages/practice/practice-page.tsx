import { ALPHABETS } from "@/features/shared/constants";
import { AppNavbar } from "@/components/ui";
import { GameCell } from "@/components/widgets";
import { useNavigate } from "react-router-dom";

export default function PracticePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto border py-5 flex flex-col gap-5">
        <AppNavbar onBack={handleBack} />
        <section className="grid grid-cols-5 gap-y-12 gap-x-5 justify-items-center">
          {ALPHABETS.map((alphabet) => (
            <div key={alphabet.letter}>
              <p className="text-center mb-4 text-xl font-bold">
                {alphabet.letter}
              </p>
              <GameCell
                character={alphabet}
                key={`cell-${alphabet.letter}`}
                value={alphabet.cell}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

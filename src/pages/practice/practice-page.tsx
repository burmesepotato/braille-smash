import { ALPHABETS } from "@/features/shared/constants";
import { AppNavbar, GameCell } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export default function PracticePage() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto border py-5 flex flex-col gap-5">
        <AppNavbar title="Practice Alphabets" onBack={onBack} />
        <section className="grid grid-cols-5 gap-y-12 gap-x-5 justify-items-center">
          {ALPHABETS.map((alphabet) => (
            <div key={alphabet.letter}>
              <p className="text-center mb-4 text-xl font-bold">
                {alphabet.letter}
              </p>
              <GameCell defaultCell={alphabet.cell} id={alphabet.letter} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

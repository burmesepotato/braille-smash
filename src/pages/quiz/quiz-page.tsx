import { AppNavbar, GameTimer } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";
import { useAlphabet } from "@/features/shared/hooks";
import { GameCell } from "@/features/shared/ui";
import { BrailleAlphabet, BrailleCell } from "@/features/shared/types";
import { useEffect, useState } from "react";

const TIMER_SECONDS = 30;

export default function QuizPage() {
  const navigate = useNavigate();
  const { getRandomAlphabet, isSame } = useAlphabet();

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [alphabet, setAlphabet] = useState<BrailleAlphabet>(
    getRandomAlphabet(5)
  );
  const [answer, setAnswer] = useState<BrailleCell>(
    new Array(6).fill(false) as BrailleCell
  );

  const onBack = () => {
    navigate("/");
  };

  const onTimeout = () => {
    setIsGameOver(true);
  };

  // Reset timer, score, answer, get random alphabet
  const resetGame = () => {
    setTimer(TIMER_SECONDS);
    setAnswer(new Array(6).fill(false) as BrailleCell);
    setAlphabet(getRandomAlphabet(5));
  };

  // On initial load, reset score, game
  useEffect(() => {
    setScore(0);
    resetGame();
  }, []);

  // On answer update, If correct, reset game.
  useEffect(() => {
    const isCorrect = isSame(alphabet.cell, answer);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      resetGame();
    }
  }, [alphabet.cell, answer, isSame]);

  return (
    <main>
      <div className="max-w-7xl mx-auto border py-5 flex flex-col gap-5 min-h-screen">
        <AppNavbar onBack={onBack} />
        <div className="flex flex-col items-center gap-8">
          <section className="flex flex-col gap-3">
            <p className="text-xl">
              What is the braille cell of this alphabet?
            </p>
            <p className="text-3xl font-bold text-center uppercase">
              {alphabet.letter}
            </p>
          </section>

          <GameCell
            disabled={isGameOver}
            key={`cell-${alphabet.letter}`}
            id={alphabet.letter}
            defaultCell={answer}
            onChange={(cell: BrailleCell) => setAnswer(cell)}
          />

          <section>
            <p className="text-xl">Score: {score}</p>
          </section>

          <GameTimer
            key={`timer-${alphabet.letter}`}
            seconds={timer}
            onTimeout={onTimeout}
          />
        </div>
      </div>
    </main>
  );
}

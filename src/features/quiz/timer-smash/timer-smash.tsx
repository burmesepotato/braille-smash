import { useAlphabet } from "@/features/shared/hooks";
import { BrailleAlphabet, BrailleCell } from "@/features/shared/types";
import { GameQuestion, GameCell, GameTimer } from "@/features/shared/ui";
import { useState, useEffect } from "react";

const TIMER_SECONDS = 30;
const MAX_ALPHABET = 10;

export const TimerSmash = () => {
  const { getRandomAlphabet, isSame } = useAlphabet();

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [alphabet, setAlphabet] = useState<BrailleAlphabet>(
    getRandomAlphabet(MAX_ALPHABET)
  );
  const [answer, setAnswer] = useState<BrailleCell>(
    new Array(6).fill(false) as BrailleCell
  );

  const onTimeout = () => {
    setIsGameOver(true);
  };

  // Reset timer, score, answer, get random alphabet
  const resetGame = () => {
    setTimer(TIMER_SECONDS);
    setAnswer(new Array(6).fill(false) as BrailleCell);
    setAlphabet(getRandomAlphabet(MAX_ALPHABET));
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
    <section className="flex flex-col items-center gap-8">
      <GameQuestion
        question="What is the braille cell of this letter?"
        letter={alphabet.letter}
      />

      <GameCell
        size="lg"
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
        totalSeconds={timer}
        onTimeout={onTimeout}
      />
    </section>
  );
};

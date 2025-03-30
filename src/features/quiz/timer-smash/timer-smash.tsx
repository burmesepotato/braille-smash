import { useAlphabet } from "@/features/shared/hooks";
import { BrailleAlphabet, BrailleCell } from "@/features/shared/types";
import { GameQuestion, GameCell, GameTimer } from "@/features/shared/ui";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { quizGameState } from "@/features/shared/states";

const TIMER_SECONDS = 30;
const MAX_ALPHABET = 5;

export const TimerSmash = () => {
  const { getRandomAlphabet, isSame } = useAlphabet();

  const [{ isPause }] = useRecoilState(quizGameState);

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const [alphabet, setAlphabet] = useState<BrailleAlphabet>(
    getRandomAlphabet(MAX_ALPHABET)
  );
  const [answer, setAnswer] = useState<BrailleCell>(
    new Array(6).fill(false) as BrailleCell
  );

  const handleAnswerChange = (cell: BrailleCell) => {
    const isCorrect = isSame(alphabet.cell, cell);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      resetGame();
    }
  };

  const handleTimeout = () => {
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
    resetGame();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center gap-8 min-h-screen justify-center">
        <GameQuestion
          question="What is the braille cell of this letter?"
          letter={alphabet.letter}
        />

        <GameCell
          alphabet={alphabet}
          disabled={isGameOver}
          key={`cell-${alphabet.letter}`}
          onChange={handleAnswerChange}
          size="lg"
          value={answer}
        />

        <section>
          <p className="text-xl">Score: {score}</p>
        </section>

        <GameTimer
          isPaused={isPause}
          key={`timer-${alphabet.letter}`}
          totalSeconds={timer}
          onTimeout={handleTimeout}
        />
      </section>
    </>
  );
};

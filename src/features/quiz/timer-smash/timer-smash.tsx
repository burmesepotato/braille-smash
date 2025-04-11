import { useAlphabet } from "@/features/shared/hooks";
import { BrailleAlphabet, BrailleCell } from "@/features/shared/types";
import { GameQuestion, GameCell, GameTimer } from "@/features/shared/ui";
import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { quizGameState } from "@/features/shared/states";
import { useTimerSmash } from "@/features/shared/hooks";

const MAX_ALPHABET = 5;

export const TimerSmash = () => {
  const { getRandomAlphabet, isSameCell } = useAlphabet();
  const { timer, resetTimer } = useTimerSmash();

  const [{ isPause }] = useRecoilState(quizGameState);

  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [alphabet, setAlphabet] = useState<BrailleAlphabet>(
    getRandomAlphabet(MAX_ALPHABET)
  );
  const [answer, setAnswer] = useState<BrailleCell>(
    new Array(6).fill(false) as BrailleCell
  );

  const handleAnswerChange = useCallback(
    (cell: BrailleCell) => {
      if (isSameCell(alphabet.cell, cell)) {
        setScore((prev) => prev + 1);
        resetGame();
      }
    },
    [alphabet.cell]
  );

  const handleTimeout = () => {
    setIsGameOver(true);
  };

  // Reset timer, score, answer, get random alphabet
  const resetGame = () => {
    resetTimer();
    setAnswer(new Array(6).fill(false) as BrailleCell);
    setAlphabet(getRandomAlphabet(MAX_ALPHABET));
  };

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

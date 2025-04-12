import { useRecoilState } from "recoil";
import { quizGameState } from "@/features/shared/states";
import QuizLayout from "@/layouts/quiz-layout";
import { GameQuestion, GameCell, GameTimer } from "@/components";
import { useCharacter, useTimerSmash } from "@/hooks";
import { BrailleCharacter, BrailleCell } from "@/features/shared/types";
import { useState, useCallback, useEffect } from "react";

export default function TimerSmashPage() {
  const { getRandomCharacter, isSameCell } = useCharacter();
  const { timer, resetTimer } = useTimerSmash();

  const [{ difficulty, isGameOver, isPaused, score }, setQuizGameState] =
    useRecoilState(quizGameState);

  const [character, setCharacter] = useState<BrailleCharacter>(
    getRandomCharacter(difficulty)
  );
  const [answer, setAnswer] = useState<BrailleCell>(
    new Array(6).fill(false) as BrailleCell
  );

  const handleCloseMenu = () => {
    setQuizGameState((prev) => ({ ...prev, isPaused: false }));
  };
  const handleOpenMenu = () => {
    setQuizGameState((prev) => ({ ...prev, isPaused: true }));
  };
  const handleRestartGame = () => {
    setQuizGameState(() => ({
      difficulty: "EASY",
      isGameOver: false,
      isPaused: false,
      score: 0,
    }));
    loadNextQuestion();
  };
  const handleSettings = () => {
    console.log("Clicked Settings");
    // setQuizGameState((prev) => ({ ...prev, isPaused: true }));
  };

  const handleAnswerChange = useCallback(
    (cell: BrailleCell) => {
      if (isSameCell(character.cell, cell)) {
        setQuizGameState((prev) => ({
          ...prev,
          score: prev.score + 1,
        }));
        loadNextQuestion();
      }
    },
    [character.cell]
  );

  const handleTimeout = useCallback(() => {
    setQuizGameState((prev) => ({
      ...prev,
      isGameOver: true,
    }));
  }, []);

  // Reset timer, answer, get random character
  const loadNextQuestion = () => {
    resetTimer();
    setAnswer(new Array(6).fill(false) as BrailleCell);
    setCharacter(getRandomCharacter(difficulty));
  };

  // On initial load, start game
  useEffect(() => {
    handleRestartGame();
  }, []);

  return (
    <QuizLayout
      onCloseMenu={handleCloseMenu}
      onOpenMenu={handleOpenMenu}
      onOpenSettings={handleSettings}
      onRestartGame={handleRestartGame}
      showResumeBtn={!isGameOver}
    >
      <section className="flex flex-col items-center gap-8 min-h-screen justify-center">
        <GameQuestion
          question="What is the braille cell of this letter?"
          letter={character.letter}
        />

        <GameCell
          character={character}
          disabled={isGameOver}
          key={`cell-${character.letter}`}
          onChange={handleAnswerChange}
          size="lg"
          value={answer}
        />

        <section>
          <p className="text-xl">Score: {score}</p>
        </section>

        <GameTimer
          isPaused={isPaused}
          key={`timer-${character.letter}`}
          totalSeconds={timer}
          onTimeout={handleTimeout}
        />
      </section>
    </QuizLayout>
  );
}

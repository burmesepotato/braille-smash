import { TimerSmash } from "@/features/quiz";
import { AppButton, AppNavbar, GameMenu } from "@/features/shared/ui";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { quizGameState } from "@/features/shared/states";

export default function QuizPlayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const mode = data.mode;
  const setGameState = useSetRecoilState(quizGameState);

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
    setGameState((prev) => ({ ...prev, isPause: false }));
  };
  const handleOpenMenu = () => {
    setGameState((prev) => ({ ...prev, isPause: true }));
    setShowMenu(true);
  };
  const handleSettings = () => {
    console.log("Clicked Settings");
  };

  const handleRestartGame = () => {
    setGameState((prev) => ({ ...prev, score: 0 }));
    handleCloseMenu();
  };

  const handleQuitGame = () => {
    navigate("/quiz");
  };

  return (
    <>
      <GameMenu
        onClose={handleCloseMenu}
        isOpen={showMenu}
        onContinueGame={handleCloseMenu}
        onQuitGame={handleQuitGame}
        onRestartGame={handleRestartGame}
      />
      <main className="max-w-screen-2xl mx-auto">
        <AppNavbar
          backBtnText="Leave Game"
          backBtnIcon={<ArrowLeftStartOnRectangleIcon className="size-8" />}
          onBack={handleOpenMenu}
        >
          <AppButton
            prefixIcon={<Cog6ToothIcon className="size-8" />}
            onClick={handleSettings}
            variant="icon"
          />
        </AppNavbar>
        <div className="px-8 flex flex-col gap-5 min-h-screen">
          {mode === "LIFE" && <div>Life Smash</div>}
          {mode === "TIMER" && <TimerSmash />}
        </div>
      </main>
    </>
  );
}

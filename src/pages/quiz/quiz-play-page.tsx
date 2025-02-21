import { TimerSmash } from "@/features/quiz";
import { AppButton, AppNavbar, GameMenu } from "@/features/shared/ui";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function QuizPlayPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const mode = data.mode;

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  const handleLeaveGame = () => {
    // TODO: Set state to pause game
    setShowMenu(true);
  };
  const handleSettings = () => {
    console.log("Clicked Settings");
  };
  const handleContinueGame = () => {
    // TODO: Set state to resume game
  };

  const handleRestartGame = () => {};

  const handleQuitGame = () => {
    // TODO: Set state to terminate game
    navigate("/quiz");
  };

  return (
    <>
      <GameMenu
        onClose={handleCloseMenu}
        isOpen={showMenu}
        onContinueGame={handleContinueGame}
        onQuitGame={handleQuitGame}
        onRestartGame={handleRestartGame}
      />
      <main className="max-w-screen-2xl mx-auto">
        <AppNavbar
          backBtnText="Leave Game"
          backBtnIcon={<ArrowLeftStartOnRectangleIcon className="size-8" />}
          onBack={handleLeaveGame}
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

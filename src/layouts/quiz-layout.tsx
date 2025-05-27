import { AppButton, AppNavbar } from "@/components/ui";
import { GameMenu } from "@/components/widgets";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuizLayoutProps {
  children: React.ReactNode;
  onCloseMenu: () => void;
  onOpenMenu: () => void;
  onOpenSettings: () => void;
  onQuitGame?: () => void;
  onRestartGame: () => void;
  showResumeBtn?: boolean;
}

export default function QuizLayout({
  children,
  onCloseMenu,
  onOpenMenu,
  onOpenSettings,
  onQuitGame,
  onRestartGame,
  showResumeBtn = false,
}: QuizLayoutProps) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
    onCloseMenu();
  };
  const handleOpenMenu = () => {
    setShowMenu(true);
    onOpenMenu();
  };
  const handleOpenSettings = () => {
    // TODO: Open settings modal
    onOpenSettings();
  };
  const handleRestartGame = () => {
    onRestartGame();
    handleCloseMenu();
  };
  const handleQuitGame = () => {
    onQuitGame?.();
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
        showContinueBtn={showResumeBtn}
      />
      <main className="max-w-screen-2xl mx-auto">
        <AppNavbar
          backBtnText="Leave Game"
          backBtnIcon={<ArrowLeftStartOnRectangleIcon className="size-8" />}
          onBack={handleOpenMenu}
        >
          <AppButton
            prefixIcon={<Cog6ToothIcon className="size-8" />}
            onClick={handleOpenSettings}
            variant="icon"
          />
        </AppNavbar>
        <div className="px-8 flex flex-col gap-5 min-h-screen">{children}</div>
      </main>
    </>
  );
}

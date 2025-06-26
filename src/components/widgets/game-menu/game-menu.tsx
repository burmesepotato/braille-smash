import { AppButton, AppMenuOverlay } from "@/components/ui";

interface GameMenuProps {
  isOpen?: boolean;
  onClose: () => void;
  onContinueGame: () => void;
  onRestartGame: () => void;
  onQuitGame: () => void;
  showContinueBtn?: boolean;
}

export const GameMenu = (props: GameMenuProps) => {
  const {
    isOpen,
    onClose,
    onContinueGame,
    onRestartGame,
    onQuitGame,
    showContinueBtn,
  } = props;

  return (
    <AppMenuOverlay
      onClose={onClose}
      isOpen={isOpen}
      closeBtnText="Return To Game"
    >
      <div className="flex flex-col gap-10 justify-center items-center grow px-12">
        {showContinueBtn && (
          <AppButton
            hoverUnderline
            variant="link"
            size="lg"
            onClick={onContinueGame}
          >
            <span className="text-5xl">Continue Playing</span>
          </AppButton>
        )}
        <AppButton
          hoverUnderline
          variant="link"
          size="lg"
          onClick={onRestartGame}
        >
          <span className="text-5xl">Restart Game</span>
        </AppButton>
        <AppButton hoverUnderline variant="link" size="lg" onClick={onQuitGame}>
          <span className="text-5xl">Quit Game</span>
        </AppButton>
      </div>
    </AppMenuOverlay>
  );
};

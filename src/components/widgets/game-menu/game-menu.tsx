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
    <AppMenuOverlay onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col gap-10 justify-center items-center grow px-12">
        {showContinueBtn && (
          <AppButton
            hoverUnderline
            variant="link"
            size="lg"
            onClick={onContinueGame}
            className="justify-start"
          >
            <span className="text-5xl font-light">Continue Playing</span>
          </AppButton>
        )}
        <AppButton
          hoverUnderline
          variant="link"
          size="lg"
          onClick={onRestartGame}
          className="justify-start"
        >
          <span className="text-5xl font-light">Restart Game</span>
        </AppButton>
        <AppButton
          hoverUnderline
          variant="link"
          size="lg"
          onClick={onQuitGame}
          className="justify-start"
        >
          <span className="text-5xl font-light">Quit Game</span>
        </AppButton>
      </div>
    </AppMenuOverlay>
  );
};

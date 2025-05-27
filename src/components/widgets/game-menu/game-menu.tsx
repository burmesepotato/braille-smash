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
      <div className="flex flex-col gap-10 justify-center items-center sm:items-start grow px-12">
        {showContinueBtn && (
          <AppButton
            variant="link"
            size="lg"
            onClick={onContinueGame}
            className="justify-start"
          >
            <span className="font-bold">Continue Playing</span>
          </AppButton>
        )}
        <AppButton
          variant="link"
          size="lg"
          onClick={onRestartGame}
          className="justify-start"
        >
          <span className="font-bold">Restart Game</span>
        </AppButton>
        <AppButton
          variant="link"
          size="lg"
          onClick={onQuitGame}
          className="justify-start"
        >
          <span className="font-bold">Quit Game</span>
        </AppButton>
      </div>
    </AppMenuOverlay>
  );
};

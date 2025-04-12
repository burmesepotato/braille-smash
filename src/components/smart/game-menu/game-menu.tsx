import { AppButton } from "../../atoms";
import { AppMenuOverlay } from "../../organisms";

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
      <div className="flex flex-col gap-4 justify-center items-center grow">
        {showContinueBtn && (
          <AppButton
            variant="transparent"
            label="Continue Playing"
            size="lg"
            onClick={onContinueGame}
          />
        )}
        <AppButton
          variant="transparent"
          label="Restart Game"
          size="lg"
          onClick={onRestartGame}
        />
        <AppButton
          variant="transparent"
          label="Quit Game"
          size="lg"
          onClick={onQuitGame}
        />
      </div>
    </AppMenuOverlay>
  );
};

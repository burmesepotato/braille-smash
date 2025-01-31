import { AppButton, GameSoundButton } from "@/features/shared/ui";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

interface AppNavbarProps {
  title?: string;
  onBack?: () => void;
}

export const AppNavbar = (props: AppNavbarProps) => {
  const { title, onBack } = props;

  return (
    <nav className="flex items-center justify-between">
      {onBack && (
        <AppButton
          prefixIcon={<ArrowLeftStartOnRectangleIcon className="size-5" />}
          onClick={onBack}
          variant="icon"
        />
      )}
      {title && (
        <div>
          <h1 className="text-3xl text-center font-bold">{title}</h1>
        </div>
      )}
      <GameSoundButton />
    </nav>
  );
};

import { AppButton } from "@/features/shared/ui";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

interface AppNavbarProps {
  children?: ReactNode;
  textBack?: string;
  onBack?: () => void;
}

export const AppNavbar = (props: AppNavbarProps) => {
  const { children, textBack, onBack } = props;

  return (
    <nav className="h-18 py-4 fixed inset-x-0 top-0 z-10">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-8">
        {onBack && (
          <AppButton
            label={textBack}
            prefixIcon={<ArrowLeftStartOnRectangleIcon className="size-8" />}
            onClick={onBack}
            variant="transparent"
          />
        )}
        {children}
        {/* <GameSoundButton /> */}
      </div>
    </nav>
  );
};

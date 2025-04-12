import { AppButton } from "@/components";
import { ReactNode } from "react";

interface AppNavbarProps {
  children?: ReactNode;
  backBtnText?: string;
  backBtnIcon?: ReactNode;
  onBack?: () => void;
}

export const AppNavbar = (props: AppNavbarProps) => {
  const { children, backBtnText, backBtnIcon, onBack } = props;

  return (
    <nav className="h-18 py-4 fixed inset-x-0 top-0 z-10">
      <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-8">
        {onBack && (
          <AppButton
            label={backBtnText}
            prefixIcon={backBtnIcon}
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

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppButton } from "@/components/ui";
import { cn } from "@/utils";
import { ReactNode } from "react";

interface AppMenuOverlayProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
}

export const AppMenuOverlay = (props: AppMenuOverlayProps) => {
  const { isOpen, onClose, children } = props;

  return (
    <nav
      className={cn(
        "fixed h-screen z-50 inset-0 bg-slate-900 duration-300",
        !isOpen && "opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex flex-col">
        <div className="flex justify-start py-4 px-8">
          <AppButton
            variant="icon"
            prefixIcon={
              <XMarkIcon className="size-8 hover:text-yellow-500 transition-colors duration-300" />
            }
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </nav>
  );
};

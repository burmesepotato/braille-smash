import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppButton } from "@/components/ui";
import { cn } from "@/utils";
import { ReactNode } from "react";

interface AppMenuOverlayProps {
  children?: ReactNode;
  closeBtnText?: string;
  isOpen?: boolean;
  onClose: () => void;
}

export const AppMenuOverlay = (props: AppMenuOverlayProps) => {
  const { isOpen, onClose, children, closeBtnText } = props;

  return (
    <nav
      className={cn(
        "fixed h-screen z-50 inset-0 bg-slate-950 duration-300",
        !isOpen && "opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex flex-col">
        <div className="py-4 px-8 h-18">
          <AppButton
            variant="link"
            prefixIcon={<XMarkIcon className="size-8" />}
            onClick={onClose}
          >
            {closeBtnText || ""}
          </AppButton>
        </div>
        {children}
      </div>
    </nav>
  );
};

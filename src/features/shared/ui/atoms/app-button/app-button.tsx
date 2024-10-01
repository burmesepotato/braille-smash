import { cn } from "@/features/shared/utils";
import { ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export const AppButton = (props: AppButtonProps) => {
  const { label, className, ...rest } = props;
  return (
    <button
      className={cn(
        "min-w-32 py-2 px-3 bg-lime-900 text-white rounded-2xl",
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};

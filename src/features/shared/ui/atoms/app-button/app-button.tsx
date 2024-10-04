import { cn } from "@/features/shared/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  variant?: "default" | "icon";
}

const VARIANT_DEFAULT = "min-w-32 py-2 px-3";
const VARIANT_ICON = "p-2";

export const AppButton = (props: AppButtonProps) => {
  const {
    label,
    className,
    prefixIcon,
    suffixIcon,
    variant = "default",
    ...rest
  } = props;
  return (
    <button
      className={cn(
        " bg-lime-900 text-white rounded-xl flex items-center gap-1.5 justify-center",
        variant === "default" && VARIANT_DEFAULT,
        variant === "icon" && VARIANT_ICON,
        className
      )}
      {...rest}
    >
      {prefixIcon}
      {label}
      {suffixIcon ? suffixIcon : null}
    </button>
  );
};

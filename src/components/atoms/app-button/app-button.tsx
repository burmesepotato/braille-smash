import { cn } from "@/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  variant?: "default" | "icon" | "transparent" | "skeleton";
  size?: "sm" | "md" | "lg";
}

const VARIANT_DEFAULT = "bg-white text-black";
const VARIANT_SKELETON = "border border-white rounded-xl";
const VARIANT_TRANSPARENT = "bg-transparent text-white";
const VARIANT_ICON = "p-2 !min-w-0";

const SIZE_SM = "p-2 text-xs";
const SIZE_MD = "min-w-32 py-2 px-3 text-base";
const SIZE_LG = "min-w-64 py-4 px-4 text-xl";

export const AppButton = (props: AppButtonProps) => {
  const {
    label,
    className,
    prefixIcon,
    suffixIcon,
    variant = "default",
    size = "md",
    ...rest
  } = props;
  return (
    <button
      className={cn(
        "rounded-xl flex items-center gap-1.5 justify-center",
        variant === "default" && VARIANT_DEFAULT,
        variant === "icon" && VARIANT_ICON,
        variant === "skeleton" && VARIANT_SKELETON,
        variant === "transparent" && VARIANT_TRANSPARENT,
        size === "sm" && SIZE_SM,
        size === "md" && SIZE_MD,
        size === "lg" && SIZE_LG,
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

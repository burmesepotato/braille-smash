import { cn } from "@/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  hoverUnderline?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  variant?: "default" | "icon" | "link" | "skeleton";
  size?: "sm" | "md" | "lg";
}

// const VARIANT_DEFAULT = "bg-white text-slate-950";
const VARIANT_DEFAULT = "bg-[#04F06A] text-slate-950";
// const VARIANT_DEFAULT = "bg-[#7D5BA6] text-white";
const VARIANT_SKELETON = "border border-white rounded-xl";
const VARIANT_LINK =
  "bg-transparent text-white px-0 min-w-fit hover:text-yellow-500";
const VARIANT_ICON = "p-2 !min-w-0";

const SIZE_SM = "p-2 text-xs";
const SIZE_MD = "min-w-32 py-3 px-3 text-lg";
const SIZE_LG = "min-w-64 py-4 px-4 text-4xl";

export const AppButton = (props: AppButtonProps) => {
  const {
    children,
    className,
    hoverUnderline = false,
    prefixIcon,
    suffixIcon,
    variant = "default",
    size = "md",
    ...rest
  } = props;
  return (
    <button
      className={cn(
        "rounded-xl flex items-center gap-1.5 justify-center relative group transition-all duration-300",
        size === "sm" && SIZE_SM,
        size === "md" && SIZE_MD,
        size === "lg" && SIZE_LG,
        variant === "default" && VARIANT_DEFAULT,
        variant === "icon" && VARIANT_ICON,
        variant === "skeleton" && VARIANT_SKELETON,
        variant === "link" && VARIANT_LINK,
        className
      )}
      {...rest}
    >
      {prefixIcon}
      {children}
      {suffixIcon ? suffixIcon : null}
      {variant === "link" && hoverUnderline && (
        <span className="absolute bottom-0 w-0 group-hover:w-1/2 left-1/4 h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 ease-in-out duration-500" />
      )}
    </button>
  );
};

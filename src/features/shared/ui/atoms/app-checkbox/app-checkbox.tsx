import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { cn } from "@/features/shared/utils";
import "./app-checkbox.css";

interface AppCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  showError?: boolean;
  sizeVariant?: "sm" | "md" | "lg";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AppCheckbox = (props: AppCheckboxProps) => {
  const {
    defaultChecked,
    disabled,
    label,
    id,
    showError,
    sizeVariant = "sm",
    onChange,
  } = props;
  const [checked, setChecked] = useState(defaultChecked);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange?.(e);
  };

  return (
    <div
      className={cn(
        "app-checkbox",
        disabled && "app-checkbox--disabled",
        sizeVariant === "sm" && "app-checkbox--sm",
        sizeVariant === "md" && "app-checkbox--md",
        sizeVariant === "lg" && "app-checkbox--lg"
      )}
    >
      <input
        className={cn("app-checkbox__input", showError && "error")}
        type="checkbox"
        id={id}
        aria-checked={checked}
        checked={checked}
        onChange={handleOnChange}
        aria-label={label}
        disabled={disabled}
      />
      <label htmlFor={id} className="app-checkbox__label" />
    </div>
  );
};

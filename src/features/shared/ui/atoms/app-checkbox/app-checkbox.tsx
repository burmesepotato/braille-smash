import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import "./app-checkbox.css";
import clsx from "clsx";

interface AppCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  sizeVariant?: "sm" | "md" | "lg";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AppCheckbox = (props: AppCheckboxProps) => {
  const {
    defaultChecked,
    disabled,
    label,
    id,
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
      className={clsx(
        "app-checkbox",
        disabled && "app-checkbox--disabled",
        sizeVariant === "sm" && "app-checkbox--sm",
        sizeVariant === "md" && "app-checkbox--md",
        sizeVariant === "lg" && "app-checkbox--lg"
      )}
    >
      <input
        className="app-checkbox__input"
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

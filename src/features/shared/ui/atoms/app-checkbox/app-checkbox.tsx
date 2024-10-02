import { InputHTMLAttributes, useState } from "react";
import "./app-checkbox.css";

interface AppCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const AppCheckbox = (props: AppCheckboxProps) => {
  const { defaultChecked, label, id } = props;
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="app-checkbox">
      <input
        className="app-checkbox__input"
        type="checkbox"
        id={id}
        aria-checked={checked}
        checked={checked}
        onChange={() => setChecked(!checked)}
        aria-label={label}
      />
      <label htmlFor={id} className="app-checkbox__label" />
    </div>
  );
};

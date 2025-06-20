import { ReactNode } from "react";

interface AppButtonModeProps {
  children?: ReactNode;
  title: string;
  titleIcon?: ReactNode;
  onClick?: () => void;
}

export const AppButtonMode = ({
  children,
  title,
  titleIcon,
  onClick,
}: AppButtonModeProps) => {
  return (
    <button className="p-0" onClick={onClick}>
      <div className="flex flex-col gap-2 py-4 pl-4 pr-6 bg-slate-700 hover:bg-slate-300 duration-300 text-white hover:text-slate-950 rounded-3xl">
        <div className="grid grid-cols-[auto_1fr] gap-4">
          {titleIcon && (
            <div className="text-4xl bg-slate-50 rounded-xl w-16 h-16 flex items-center justify-center p-2">
              {titleIcon}
            </div>
          )}
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold">{title}</h4>
            {children}
          </div>
        </div>
      </div>
    </button>
  );
};

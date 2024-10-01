import { useState, useEffect } from "react";
import { cn } from "@/features/shared/utils";

interface AppTimerBarProps {
  total: number;
  remaining: number;
}

export const AppTimerBar = (props: AppTimerBarProps) => {
  const { total, remaining } = props;

  const [progress, setProgress] = useState((remaining / total) * 100);

  useEffect(() => {
    // Update progress using requestAnimationFrame for smoother transitions
    const updateProgress = () => {
      setProgress((remaining / total) * 100);
    };
    window.requestAnimationFrame(updateProgress);
  }, [remaining, total]);

  return (
    <div className="flex items-center">
      <div className="w-72 h-4 bg-gray-200 rounded-full relative overflow-hidden">
        <div
          className={cn(
            "h-4 bg-lime-400 rounded-full absolute inset-0 transition-all ease-linear duration-100",
            progress < 50 && "bg-orange-400",
            progress < 25 && "bg-red-600"
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

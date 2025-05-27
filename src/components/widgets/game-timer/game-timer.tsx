import { useEffect, useState } from "react";
import { AppTimerBar, AppTimerCountdown } from "@/components/ui";

interface GameTimerProps {
  totalSeconds: number;
  isPaused?: boolean;
  onChange?: (seconds: number) => void;
  onTimeout: () => void;
}

export const GameTimer = (props: GameTimerProps) => {
  const { totalSeconds, isPaused = false, onChange, onTimeout } = props;
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

  useEffect(() => {
    if (!isPaused) {
      // Return early if time has already reached 0
      if (remainingSeconds <= 0) {
        onTimeout();
        return;
      }

      onChange?.(remainingSeconds);

      // Set interval to decrease the time every second
      const intervalId = setInterval(() => {
        setRemainingSeconds((prev) => prev - 1);
      }, 1000);

      // Clean up the interval when component unmounts or time changes
      return () => clearInterval(intervalId);
    }
  }, [remainingSeconds, onChange, onTimeout, isPaused]);

  return (
    <div>
      <AppTimerCountdown seconds={remainingSeconds} />
      <AppTimerBar total={totalSeconds} remaining={remainingSeconds} />
    </div>
  );
};

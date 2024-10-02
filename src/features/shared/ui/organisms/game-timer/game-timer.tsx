import { useEffect, useState } from "react";
import { AppTimerBar, AppTimerCountdown } from "@/features/shared/ui";

interface GameTimerProps {
  seconds: number;
  onTimeout: () => void;
}

export const GameTimer = (props: GameTimerProps) => {
  const { seconds, onTimeout } = props;
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    // Return early if time has already reached 0
    if (remainingSeconds <= 0) {
      onTimeout();
      return;
    }

    // Set interval to decrease the time every second
    const intervalId = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    // Clean up the interval when component unmounts or time changes
    return () => clearInterval(intervalId);
  }, [remainingSeconds]);

  return (
    <div>
      <AppTimerCountdown seconds={remainingSeconds} />
      <AppTimerBar total={seconds} remaining={remainingSeconds} />
    </div>
  );
};

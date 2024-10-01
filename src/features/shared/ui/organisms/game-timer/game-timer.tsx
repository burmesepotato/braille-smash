import { useEffect, useState } from "react";
import { AppTimerBar, AppTimerCountdown } from "@/features/shared/ui";

interface GameTimerProps {
  seconds: number; // seconds
}

export const GameTimer = (props: GameTimerProps) => {
  const { seconds } = props;
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    // Return early if time has already reached 0
    if (remainingSeconds <= 0) return;

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

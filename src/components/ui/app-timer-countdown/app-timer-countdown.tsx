import numeral from "numeral";

interface AppTimerCountdownProps {
  seconds: number;
}

export const AppTimerCountdown = (props: AppTimerCountdownProps) => {
  const { seconds } = props;
  return (
    <div className="flex items-center">
      <span>{numeral(Math.floor(seconds / 60)).format("00")}</span>
      <span>:</span>
      <span>{numeral(seconds % 60).format("00")}</span>
    </div>
  );
};

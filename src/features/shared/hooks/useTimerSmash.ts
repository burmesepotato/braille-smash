import { useRecoilState } from "recoil";
import { timerSmashState } from "../states";

export const useTimerSmash = () => {
  const [timerSmash, setTimerSmash] = useRecoilState(timerSmashState);

  const resetTimer = () => {
    setTimerSmash(() => ({
      timer: 30,
    }));
  };

  return {
    timer: timerSmash.timer,
    resetTimer,
  };
};

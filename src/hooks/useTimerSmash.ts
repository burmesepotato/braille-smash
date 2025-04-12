import { useRecoilState, useRecoilValue } from "recoil";
import { quizGameState, timerSmashState } from "@/features/shared/states";
import { MAX_TIME } from "@/features/shared/constants";

export const useTimerSmash = () => {
  const [timerSmash, setTimerSmash] = useRecoilState(timerSmashState);
  const { difficulty } = useRecoilValue(quizGameState);

  const resetTimer = () => {
    setTimerSmash(() => ({
      timer: MAX_TIME[difficulty],
    }));
  };

  return {
    timer: timerSmash.timer,
    resetTimer,
  };
};

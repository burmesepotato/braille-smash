import { atom } from "recoil";

interface TimerSmashState {
  timer: number;
}

export const timerSmashState = atom<TimerSmashState>({
  key: "timerSmashState",
  default: {
    timer: 30,
  },
});

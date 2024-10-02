import { ALPHABETS } from "../constants";
import { BrailleCell } from "../types";
import { getRandomInteger } from "../utils";

export const useAlphabet = () => {
  const getRandomAlphabet = (max = ALPHABETS.length) => {
    const randomIndex = getRandomInteger(max);
    return ALPHABETS[randomIndex];
  };

  const isSame = (cellA: BrailleCell, cellB: BrailleCell) => {
    return JSON.stringify(cellA) === JSON.stringify(cellB);
  };

  return {
    getRandomAlphabet,
    isSame,
  };
};

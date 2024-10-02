import { ALPHABETS } from "../constants";
import { getRandomInteger } from "../utils";

export const useAlphabet = () => {
  const getRandomAlphabet = () => {
    const randomIndex = getRandomInteger(ALPHABETS.length);
    return ALPHABETS[randomIndex];
  };

  return {
    getRandomAlphabet,
  };
};

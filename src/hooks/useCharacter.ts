import { ALPHABETS, NUMBERS } from "@/features/shared/constants";
import { BrailleCell, GameDifficulty } from "@/features/shared/types";
import { getRandomInteger } from "@/utils";

export const useCharacter = () => {
  const getRandomAlphabet = (max = ALPHABETS.length) => {
    const randomIndex = getRandomInteger(max);
    return ALPHABETS[randomIndex];
  };

  const getRandomNumber = (max = NUMBERS.length) => {
    const randomIndex = getRandomInteger(max);
    return NUMBERS[randomIndex];
  };

  const isSameCell = (cellA: BrailleCell, cellB: BrailleCell) => {
    return JSON.stringify(cellA) === JSON.stringify(cellB);
  };

  const getRandomCharacter = (diff: GameDifficulty) => {
    switch (diff) {
      case "EASY": // Numbers only
        return getRandomNumber();
      case "MEDIUM": // First half of alphabets
        return getRandomAlphabet(ALPHABETS.length / 2);
      case "HARD": {
        // Random from both numbers and alphabets
        const combinedArray = [...NUMBERS, ...ALPHABETS];
        const randomIndex = getRandomInteger(combinedArray.length);
        return combinedArray[randomIndex];
      }
      default:
        throw new Error(`Unsupported difficulty level: ${diff}`);
    }
  };

  return {
    getRandomAlphabet,
    getRandomCharacter,
    getRandomNumber,
    isSameCell,
  };
};

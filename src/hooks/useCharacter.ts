import { ALPHABETS, NUMBERS } from "@/features/shared/constants";
import {
  BrailleCell,
  BrailleCharacter,
  GameDifficulty,
} from "@/features/shared/types";
import { getRandomInteger } from "@/utils";

export const useCharacter = () => {
  const getRandomAlphabet = (max = ALPHABETS.length) => {
    if (ALPHABETS.length <= 1) return ALPHABETS[0] || null; // Handle edge case

    const randomIndex = getRandomInteger(max);
    return ALPHABETS[randomIndex];
  };

  const getRandomNumber = (max = NUMBERS.length) => {
    if (NUMBERS.length <= 1) return NUMBERS[0] || null; // Handle edge case

    const randomIndex = getRandomInteger(max);
    return NUMBERS[randomIndex];
  };

  const isSameCell = (cellA: BrailleCell, cellB: BrailleCell) => {
    return JSON.stringify(cellA) === JSON.stringify(cellB);
  };

  const getRandomCharacter = (
    diff: GameDifficulty,
    prevChar: BrailleCharacter | null = null
  ): BrailleCharacter => {
    let newChar: BrailleCharacter;

    do {
      switch (diff) {
        case "EASY": // Numbers only
          newChar = getRandomNumber();
          break;
        case "MEDIUM": // First half of alphabets
          newChar = getRandomAlphabet(ALPHABETS.length / 2);
          break;
        case "HARD": {
          // Random from both numbers and alphabets
          const combinedArray = [...NUMBERS, ...ALPHABETS];
          const randomIndex = getRandomInteger(combinedArray.length);
          newChar = combinedArray[randomIndex];
          break;
        }
        default:
          throw new Error(`Unsupported difficulty level: ${diff}`);
      }
    } while (newChar === prevChar); // Ensure the new character is different

    return newChar;
  };

  return {
    getRandomAlphabet,
    getRandomCharacter,
    getRandomNumber,
    isSameCell,
  };
};

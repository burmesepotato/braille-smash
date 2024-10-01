/**
 * Represents a Braille cell with 6 dots
 * 1 4
 * 2 5
 * 3 6
 *
 * Represents a Braille character using an array.
 * cell: [1, 2, 3, 4, 5, 6]
 */

export type BrailleCell = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
];

export interface Alphabet {
  letter: string;
  cell: BrailleCell;
}

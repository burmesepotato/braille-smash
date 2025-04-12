import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { ClassValue } from "clsx";

export const cn = (...classValues: ClassValue[]) => {
  return twMerge(clsx(classValues));
};

export const getRandomInteger = (max: number) => {
  return Math.floor(Math.random() * max);
};

import { cn } from "@/features/shared/utils";
import { BrailleCell } from "@/features/shared/types";

interface GameCellProps {
  cell: BrailleCell;
  size?: "sm" | "md" | "lg";
}

export const GameCell = (props: GameCellProps) => {
  const { cell, size = "md" } = props;

  return (
    <div
      className={cn(
        "grid grid-rows-3  grid-flow-col gap-4",
        size === "sm" && "grid-cols-[1.5rem_1.5rem]",
        size === "md" && "grid-cols-[2rem_2rem]",
        size === "lg" && "grid-cols-[4rem_4rem]"
      )}
    >
      {cell.map((value, index) => (
        <div
          key={index}
          className={cn(
            "rounded-full border",
            value ? "bg-lime-700 border-lime-700" : "border-slate-200",
            size === "sm" && "w-6 h-6",
            size === "md" && "w-8 h-8",
            size === "lg" && "w-16 h-16"
          )}
        ></div>
      ))}
    </div>
  );
};

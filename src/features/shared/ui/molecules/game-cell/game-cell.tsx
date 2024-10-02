import { cn } from "@/features/shared/utils";
import { BrailleCell } from "@/features/shared/types";
import { AppCheckbox } from "@/features/shared/ui/atoms";

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
        <AppCheckbox
          id={`cell-dot-${index}`}
          label={`cell-dot-${index}`}
          defaultChecked={value}
        />
      ))}
    </div>
  );
};

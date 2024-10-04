import { cn } from "@/features/shared/utils";
import { BrailleCell } from "@/features/shared/types";
import { AppCheckbox } from "@/features/shared/ui/atoms";
import { ChangeEvent, useEffect, useState } from "react";

interface GameCellProps {
  id: string;
  defaultCell: BrailleCell;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (cell: BrailleCell) => void;
}

export const GameCell = (props: GameCellProps) => {
  const { id, defaultCell, disabled, size = "sm", onChange } = props;
  const [cell, setCell] = useState<BrailleCell>(defaultCell);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCell((prev) => {
      const newCell: BrailleCell = [...prev];
      newCell[index] = e.target.checked;
      return newCell;
    });
  };

  useEffect(() => {
    onChange?.(cell);
  }, [cell, onChange]);

  return (
    <div
      className={cn(
        "grid grid-rows-3  grid-flow-col gap-4",
        size === "sm" && "grid-cols-[1.5rem_1.5rem]",
        size === "md" && "grid-cols-[2rem_2rem]",
        size === "lg" && "grid-cols-[3rem_3rem]"
      )}
    >
      {cell.map((value, index) => (
        <AppCheckbox
          sizeVariant={size}
          disabled={disabled}
          key={`cell-${id}-dot-${index}`}
          id={`cell-${id}-dot-${index}`}
          label={`cell-${id}-dot-${index}`}
          defaultChecked={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e, index)
          }
        />
      ))}
    </div>
  );
};

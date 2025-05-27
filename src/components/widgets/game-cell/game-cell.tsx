import { cn } from "@/utils";
import { BrailleCharacter, BrailleCell } from "@/features/shared/types";
import { AppCheckbox } from "@/components/ui";
import { ChangeEvent, useEffect, useState } from "react";

interface GameCellProps {
  character: BrailleCharacter;
  value: BrailleCell;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (cell: BrailleCell) => void;
}

export const GameCell = (props: GameCellProps) => {
  const {
    character: { letter, cell: answerCell },
    value,
    disabled,
    size = "sm",
    onChange,
  } = props;
  const [currentCell, setCurrentCell] = useState<BrailleCell>(value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCurrentCell((prev) => {
      const newCell: BrailleCell = [...prev];
      newCell[index] = e.target.checked;
      return newCell;
    });
  };

  useEffect(() => {
    onChange?.(currentCell);
  }, [currentCell, onChange]);

  return (
    <div
      className={cn(
        "grid grid-rows-3  grid-flow-col gap-6",
        size === "sm" && "grid-cols-[1.5rem_1.5rem]",
        size === "md" && "grid-cols-[2rem_2rem]",
        size === "lg" && "grid-cols-[3rem_3rem]"
      )}
    >
      {currentCell.map((value, index) => (
        <AppCheckbox
          sizeVariant={size}
          disabled={disabled}
          key={`cell-${letter}-dot-${index}`}
          id={`cell-${letter}-dot-${index}`}
          label={`cell-${letter}-dot-${index}`}
          defaultChecked={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e, index)
          }
          showError={answerCell[index] !== currentCell[index]}
        />
      ))}
    </div>
  );
};

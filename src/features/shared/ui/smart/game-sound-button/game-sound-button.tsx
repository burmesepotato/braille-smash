import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { AppButton } from "@/features/shared/ui";
import { useState } from "react";

const ICON_CLASSNAME = "size-8";

export const GameSoundButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    console.log("TODO: Toggle sound");
  };

  return (
    <AppButton
      aria-label={isOn ? "Switch Off Sound" : "Switch On Sound"}
      onClick={handleToggle}
      prefixIcon={
        isOn ? (
          <SpeakerXMarkIcon className={ICON_CLASSNAME} />
        ) : (
          <SpeakerWaveIcon className={ICON_CLASSNAME} />
        )
      }
      variant="icon"
    />
  );
};

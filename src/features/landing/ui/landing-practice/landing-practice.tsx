import { useNavigate } from "react-router-dom";
import { AppButton } from "@/features/shared/ui";

export const LandingPractice = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("practice");
  };

  return (
    <div className="bento bg-white h-full flex flex-col gap-3 items-start">
      <h1 className="font-bold text-3xl text-black">Practice Alphabets</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officia!
      </p>
      <AppButton label="Practice" onClick={onClick} className="mt-2" />
    </div>
  );
};

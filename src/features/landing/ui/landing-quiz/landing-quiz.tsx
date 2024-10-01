import { AppButton } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export const LandingQuiz = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("quiz");
  };

  return (
    <div className="bento bg-white h-full flex flex-col gap-3 items-start">
      <h1 className="font-bold text-3xl text-black">Learn by Quiz</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
        suscipit?
      </p>
      <AppButton label="Begin Quiz" onClick={onClick} className="mt-2" />
    </div>
  );
};

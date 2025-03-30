import { AppButton } from "@/features/shared/ui";
import { useNavigate } from "react-router-dom";

export const LandingQuiz = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("quiz");
  };

  return (
    <div className="bento h-full flex flex-col gap-6 2xl:gap-10 items-start">
      <h1 className="font-bold text-3xl 2xl:text-4xl">Learn by Quiz</h1>
      <p className="text-xl 2xl:text-2xl leading-8 2xl:leading-10">
        What better way to learn Braille than through a fun, engaging quiz? Test
        your knowledge, reinforce what you've learned, and discover new
        characters as you go!
      </p>
      <AppButton label="Begin Quiz" onClick={onClick} className="mt-2" />
    </div>
  );
};

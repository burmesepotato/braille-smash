import { useNavigate } from "react-router-dom";
import { AppButton } from "@/components";

export const LandingPractice = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("practice");
  };

  return (
    <div className="bento h-full flex flex-col gap-6 2xl:gap-10 items-start">
      <h1 className="font-bold text-3xl 2xl:text-4xl">Practice Alphabets</h1>
      <p className="text-xl 2xl:text-2xl leading-8 2xl:leading-10">
        Take your time to explore and practice each Braille character at your
        own pace. Get familiar with how they look!
      </p>
      <AppButton label="Practice" onClick={onClick} className="mt-2" />
    </div>
  );
};

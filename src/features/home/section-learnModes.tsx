import { AppButton } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export const SectionLearnModes = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("quiz");
  };

  const handlePractice = () => {
    navigate("practice");
  };

  return (
    <section className="py-24">
      <div className="space-y-4 mb-16">
        <h1 className="font-bold text-6xl text-center">Learn Braille</h1>
        <p className="text-2xl leading-10 text-center">
          Choose your learning mode and start your Braille journey!
        </p>
      </div>

      <div className="grid xl:grid-cols-[minmax(14rem,_28rem),minmax(14rem,_28rem)] justify-center grid-rows-[minmax(28rem,_1fr)] gap-8">
        <article className="bento h-full flex flex-col gap-6 ">
          <h1 className="font-bold text-3xl 2xl:text-4xl">🤓 Learn by Quiz</h1>
          <div className="text-xl leading-10 grow space-y-4">
            <p>
              What better way to learn Braille than through a fun, engaging
              quiz?
            </p>
            <p>
              Test your knowledge, reinforce what you've learned, and discover
              new characters as you go!
            </p>
          </div>
          <AppButton onClick={handleQuiz}>Play Quiz</AppButton>
        </article>

        <article className="bento h-full flex flex-col gap-6 ">
          <h1 className="font-bold text-3xl 2xl:text-4xl">
            🎯 Practice Braille
          </h1>
          <div className="text-xl leading-10 grow space-y-4">
            <p>
              Go at your own pace and get familiar with each Braille character.
            </p>
            <p>The more you practice, the easier it gets!</p>
          </div>
          <AppButton onClick={handlePractice}>Practice</AppButton>
        </article>
      </div>
    </section>
  );
};

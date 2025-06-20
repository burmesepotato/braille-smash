import LetterBWhite from "@/assets/braille/letter-b-white.svg";

export const SectionHero = () => {
  return (
    <section className="pt-24 2xl:pt-32 pb-80 relative">
      <div className="max-w-screen-xl w-full mx-auto space-y-16 2xl:space-y-20">
        <div className="space-y-4 2xl:space-y-6">
          <h1 className="text-title">
            Braille Smash <span>⚡️</span>
          </h1>
          <h2 className="text-subtitle">Where Learning Braille Meets Fun!</h2>
        </div>

        <div className="grow space-y-6 max-w-4xl 2xl:max-w-6xl 2xl:space-y-10">
          <p className="text-desc">
            Braille Smash is a completely FREE, fun, interactive game designed
            to help you practice and learn Braille.
          </p>
          <p className="text-desc">
            Whether you're learning out of curiosity, supporting someone you
            care about — Braille Smash makes it easy and enjoyable to learn.
          </p>
          <p className="text-desc">
            Dive into quick quizzes, explore character practice, and start
            building your skills one dot at a time!
          </p>
        </div>
      </div>

      <img
        src={LetterBWhite}
        alt="Braille letter B"
        className="absolute -bottom-24 right-24 w-2/12 opacity-50"
      />
    </section>
  );
};

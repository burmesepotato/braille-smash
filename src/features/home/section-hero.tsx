import LetterBWhite from "@/assets/braille/letter-b-white.svg";

export const SectionHero = () => {
  return (
    <section className="space-y-16 py-24 h-screen relative">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">
          Braille Smash <span>⚡️</span>
        </h1>
        <h2 className="text-3xl">Where Learning Braille Meets Fun!</h2>
      </div>

      <div className="grow space-y-6 max-w-4xl">
        <p className="text-2xl leading-10">
          A fun and interactive game designed to help you practice and learn
          Braille.
        </p>
        <p className="text-2xl leading-10">
          Whether you're learning out of curiosity, supporting someone you care
          about — Braille Smash makes it easy and enjoyable to learn.
        </p>
        <p className="text-2xl leading-10">
          Dive into quick quizzes, explore character practice, and start
          building your skills one dot at a time!
        </p>
      </div>

      <div className="absolute -bottom-16 right-24">
        <img src={LetterBWhite} alt="Braille letter B" className="w-40" />
      </div>
    </section>
  );
};

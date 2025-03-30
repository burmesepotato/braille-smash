import { LandingQuiz, LandingPractice } from "@/features/landing";

export default function LandingPage() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <div className="min-h-screen grid lg:grid-cols-2 gap-6 p-8">
          <section className="bento">
            <div className="flex flex-col gap-6 2xl:gap-10 h-full">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold ">
                  Braille Smash <span>⚡️</span>
                </h1>
                <h2 className="text-2xl">Where Learning Braille Meets Fun!</h2>
              </div>

              <div className="grow space-y-8 2xl:space-y-10">
                <p className="text-xl 2xl:text-2xl leading-8 2xl:leading-10">
                  A fun and interactive game designed to help you practice and
                  learn Braille.
                </p>
                <p className="text-xl 2xl:text-2xl leading-8 2xl:leading-10">
                  Whether you're learning out of curiosity, supporting someone
                  you care about, or beginning your own Braille journey —
                  Braille Smash makes it easy and enjoyable.
                </p>
                <p className="text-xl 2xl:text-2xl leading-8 2xl:leading-10">
                  Dive into quick quizzes, explore character practice, and start
                  building your skills one dot at a time!
                </p>
              </div>
              <footer>
                <p className="font-light text-sm">
                  Developed by BurmesePotato 🥔
                </p>
              </footer>
            </div>
          </section>

          <section className="flex flex-col gap-6 self-end">
            <LandingQuiz />
            <LandingPractice />
          </section>
        </div>
      </div>
    </main>
  );
}

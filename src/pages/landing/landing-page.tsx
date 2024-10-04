import { LandingQuiz, LandingPractice } from "@/features/landing/ui";

export default function LandingPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="min-h-screen grid grid-cols-2 gap-4 grid-rows-5 py-8">
          <section className="row-span-5 bento">
            <div className="flex flex-col gap-12 h-full">
              <h1 className="text-7xl font-bold flex flex-col gap-4">
                <span>Braille</span>
                <span>Smash</span>
              </h1>
              <h2>Where Learning Braille Meets Fun!</h2>
              <div className="grow">
                <p className="text-xl">
                  A fun and interactive game designed to help you practice and
                  learn Braille.
                </p>
              </div>
              <footer>
                <p className="font-light text-sm">
                  Developed by BurmesePotato 🥔
                </p>
              </footer>
            </div>
          </section>

          <section className="row-span-2 row-start-2 col-start-2">
            <LandingPractice />
          </section>

          <section className="row-span-2 row-start-4 col-start-2">
            <LandingQuiz />
          </section>
        </div>
      </div>
    </main>
  );
}

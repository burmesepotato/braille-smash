import { LandingQuiz, LandingPractice } from "@/features/landing";

export default function LandingPage() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <div className="min-h-screen grid lg:grid-cols-2 gap-8 grid-rows-5 p-8">
          <section className="row-span-5 bento">
            <div className="flex flex-col gap-12 h-full">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold ">
                  Braille Smash <span>⚡️</span>
                </h1>
                <h2 className="text-2xl">Where Learning Braille Meets Fun!</h2>
              </div>

              <div className="grow">
                <p className="text-2xl leading-10">
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

          <section className="row-span-2 lg:row-start-2 lg:col-start-2">
            <LandingPractice />
          </section>

          <section className="row-span-2 lg:row-start-4 lg:col-start-2">
            <LandingQuiz />
          </section>
        </div>
      </div>
    </main>
  );
}

import {
  LandingQuiz,
  LandingSheets,
  LandingPractice,
} from "@/features/landing/ui";

export default function LandingPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto border">
        <div className="min-h-screen grid grid-cols-2 gap-4 grid-rows-5 py-8">
          <section className="row-span-5 bento">
            <div className="flex flex-col gap-12">
              <h1 className="text-7xl font-bold flex flex-col gap-4">
                <span>Braille</span>
                <span>Smash</span>
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus, tempora aliquam! Possimus nihil quasi quos!
              </p>
            </div>
          </section>

          <section className="row-span-2 row-start-1 col-start-2">
            <LandingPractice />
          </section>

          <section className="row-span-2 row-start-3 col-start-2">
            <LandingQuiz />
          </section>

          <section className="row-span-1 col-start-2">
            <LandingSheets />
          </section>
        </div>
      </div>
    </main>
  );
}
